import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./style/subscription.css";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect } from "react";
import PropTypes from "prop-types";
import useAuth from "../../Hooks/useAuth";
import useClient from "../../Hooks/useClient";
import useShop from "../../Hooks/useShop";
import Swal from "sweetalert2";
const CheckOutForm = ({ amountPay, countIncrease }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [client, refetch] = useClient();
  const [shops] = useShop();
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState();
  const axiosSecure = useAxiosSecure();
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (amountPay) {
      axiosSecure
        .post("/create-payment-intent", { price: amountPay })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [amountPay, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
    //-------------------
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        console.log(countIncrease);
        console.log(shops?.product_count);
        axiosSecure
          .patch(`/shop/${client?.shop_id}`, {
            product_count: shops?.product_count + parseInt(countIncrease),
          })
          .then((res) => {
            console.log(res.data);
            axiosSecure.patch("/admin-income", {
              income: parseInt(amountPay),
            });
            refetch();
            //-----------
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Thank you for your subscription",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      }
    }
  };
  return (
    <div>
      <h2 className="text-black">Proceed to PAY subscription!!</h2>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                iconColor: "#c4f0ff",
                color: "#000000",
                fontWeight: 500,
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                fontSize: "16px",
                fontSmoothing: "antialiased",
                ":-webkit-autofill": {
                  color: "#fce883",
                },
                "::placeholder": {
                  color: "#87bbfd",
                },
              },
              invalid: {
                iconColor: "#ffc7ee",
                color: "#ffc7ee",
              },
            },
          }}
        />
        <div className="flex justify-end">
          <button
            disabled={!stripe || !clientSecret}
            className="mt-4 btn bg-custom-main2 ml"
            type="submit"
          >
            Pay Now
          </button>
          <p>{error}</p>
          {transactionId && (
            <p className="text-green-600">
              Your transaction id: {transactionId}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

CheckOutForm.propTypes = {
  amountPay: PropTypes.string,
  countIncrease: PropTypes.string,
};

export default CheckOutForm;


