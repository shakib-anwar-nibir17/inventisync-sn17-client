import { Helmet } from "react-helmet-async";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const Subscription = () => {
  return (
    <div>
      <Helmet>
        <title>InventiSync | SUBSCRIPTION </title>
      </Helmet>
      <div>
        <h1 className="text-center text-6xl text-black font-bold mt-16">
          Subscription Plans & Benefits
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-20 mt-20 px-10">
        {/* ---------------------------plan 1------------------------------------------------- */}
        <div className="text-center border-2 border-black hover:bg-black hover:text-white font-extrabold py-8 px-4 space-y-6 bg-white text-black cursor-pointer">
          <p className="text-2xl">Pay</p>
          <h1 className="text-7xl">$10.00</h1>
          <p className="text-xl">Plan 1 Basic</p>
          <h3 className="text-2xl">Increased Limit to 200</h3>
          <h4>Benefits:</h4>
          <div className="text-left font-normal">
            <ul>
              <p className="mb-8 hover:underline">
                Seamless Operations: Experience smoother and faster transactions
                with an enhanced credit limit
              </p>
              <p className="mb-8 hover:underline">
                Entry-Level Affordability: A cost-effective solution for small
                businesses aiming for steady growth.
              </p>
              <p className="mb-8 hover:underline">
                Quick Access: Instantly access increased credit capabilities to
                meet immediate business needs.
              </p>
            </ul>
          </div>
          <div>
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="py-4 px-20 border-1 border-custom-main bg-custom-main text-black font-bold"
            >
              PAY
            </button>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <Elements stripe={stripePromise}>
                  <CheckOutForm
                    amountPay="10"
                    countIncrease="200"
                  ></CheckOutForm>
                </Elements>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        {/* ---------------------------plan 2------------------------------------------------- */}
        <div className="text-center border-2 border-black hover:bg-black hover:text-white font-extrabold py-8 px-4 space-y-6 bg-white text-black cursor-pointer">
          <p className="text-2xl">Pay</p>
          <h1 className="text-7xl">$20.00</h1>
          <p className="text-xl">Plan 2 Standard</p>
          <h3 className="text-2xl">Increased Limit to 450</h3>
          <h4>Benefits:</h4>
          <div className="text-left font-normal">
            <ul>
              <p className="mb-8 hover:underline">
                Expanded Opportunities: Unlock more opportunities for business
                expansion with a substantial credit limit.
              </p>
              <p className="mb-8 hover:underline">
                Versatility: Cater to a wider range of customer demands and
                market trends.
              </p>
              <p className="mb-8 hover:underline">
                Priority Support: Enjoy priority customer support to address any
                concerns promptly.
              </p>
            </ul>
          </div>
          <div>
            <button
              onClick={() => document.getElementById("my_modal_6").showModal()}
              className="py-4 px-20 border-1 border-custom-main bg-custom-main text-black font-bold"
            >
              PAY
            </button>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog
              id="my_modal_6"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <Elements stripe={stripePromise}>
                  <CheckOutForm
                    amountPay="20"
                    countIncrease="450"
                  ></CheckOutForm>
                </Elements>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
        {/* ---------------------------plan 3------------------------------------------------- */}
        <div className="text-center border-2 border-black hover:bg-black hover:text-white font-extrabold py-8 px-4 space-y-6 bg-white text-black cursor-pointer">
          <p className="text-2xl">Pay</p>
          <h1 className="text-7xl">$50.00</h1>
          <p className="text-xl">Plan 2 Premium</p>
          <h3 className="text-2xl">Increased Limit to 1500</h3>
          <h4>Benefits:</h4>
          <div className="text-left font-normal">
            <ul>
              <p className="mb-8 hover:underline">
                Seamless Operations: Experience smoother and faster transactions
                with an enhanced credit limit
              </p>
              <p className="mb-8 hover:underline">
                Maximum Flexibility: Optimize your business operations with an
                extensive credit limit, providing unmatched flexibility.
              </p>
              <p className="mb-8 hover:underline">
                Strategic Growth: Position your business for strategic growth
                and larger-scale ventures.
              </p>
            </ul>
          </div>
          <div>
            <button
              onClick={() => document.getElementById("my_modal_7").showModal()}
              className="py-4 px-20 border-1 border-custom-main bg-custom-main text-black font-bold"
            >
              PAY
            </button>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog
              id="my_modal_7"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <Elements stripe={stripePromise}>
                  <CheckOutForm
                    amountPay="50"
                    countIncrease="1500"
                  ></CheckOutForm>
                </Elements>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
