import { useLoaderData, useNavigate } from "react-router-dom";
import useShop from "../../Hooks/useShop";
import { FaEnvelope, FaHome, FaSearchLocation } from "react-icons/fa";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import moment from "moment/moment";

const CheckOut = () => {
  const product = useLoaderData();
  const [shops] = useShop();
  const invoice = useRef();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handlePrint = useReactToPrint({
    onPrintError: (error) => console.log(error),
    content: () => invoice.current,
    // removeAfterPrint: true,
    // print: async (printIframe) => {
    //   const pdf = new jsPDF();
    //   const document = printIframe.contentDocument;
    //   if (document) {
    //     const html = document.getElementsByTagName("html")[0];
    //     console.log(html);
    //     pdf.fromHTML(html, 15, 15, { width: 50 });
    //     pdf.save("invoice.pdf");
    //     const exporter = new Html2Pdf(html);
    //     await exporter.getPdf(true);
    //   }
    // },
  });

  // const handlePrint = () => {
  //   const pdf = new jsPDF();
  //   const invoiceHtml = invoice.current;

  //   pdf.fromHTML(invoiceHtml, 15, 15, { width: 50 });

  //   // Save the PDF or open in a new window/tab
  //   pdf.save("invoice.pdf");
  // };

  const {
    _id,
    selling_price,
    details,
    discount,
    product_name,
    production_cost,
    product_location,
    profit,
    product_quantity,
    sale_count,
    email,
    shop_name,
  } = product;

  const finalSellPrice =
    selling_price - selling_price * (parseFloat(discount) / 100);

  const date = moment().format("dddd, MMMM Do YYYY, h:mm a");

  const handleClick = () => {
    const summary = {
      product_id: _id,
      selling_price,
      discount,
      product_name,
      production_cost,
      profit,
      product_quantity,
      income: finalSellPrice,
      dateToday: new Date(),
      date,
      email,
      shop_name,
    };
    axiosSecure.post("/sales", summary).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        axiosSecure
          .patch(`/patch/products/${_id}`, {
            product_quantity: product_quantity - 1,
            sale_count: sale_count + 1,
          })
          .then((res) => {
            console.log(res.data);
            //-----------
            Swal.fire({
              title: "Congrats",
              text: "Sale Query has been generated",
              icon: "success",
            });
            navigate("/dashboard/sales-collection");
            handlePrint();
            //
          });
      }
    });
  };

  return (
    <div className="mt-10">
      <Helmet>
        <title>InventiSync | Check Out</title>
      </Helmet>
      <div className="w-[70%] mx-auto border-2 border-black py-10 px-16">
        <h1 className="text-center text-3xl font-bold mb-10">
          ChecK Out Page for <span className="text-black">{product_name}</span>
        </h1>
        <div ref={invoice} className="border-2 border-black px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="w-[125px] h-[125px]">
              <img src={shops?.logo_pic} alt="" />
            </div>
            <div className="text-5xl font-bold">
              <h1 className="text-xl">Invoice...........</h1>
              <h1>{shops?.shop_name}</h1>
            </div>
          </div>
          {/* ------------------------------- */}
          <div className="mt-6 space-y-2">
            <h1 className="font-bold text-2xl">Shop Info</h1>
            <p className="flex gap-2">
              <span className="font-bold flex space-x-2 items-center">
                <FaHome></FaHome>Name:
              </span>
              {shops?.shop_name || ""}
            </p>
            <p className="flex gap-2">
              <span className="font-bold flex space-x-2 items-center">
                <FaSearchLocation></FaSearchLocation>Location:
              </span>
              {shops?.location}
            </p>
            <p className="flex gap-2">
              <span className="font-bold flex space-x-2 items-center">
                <FaEnvelope></FaEnvelope>Contact:
              </span>
              {shops?.email}
            </p>
          </div>
          {/* ------------------------------- */}
          <div className="mt-6 space-y-3">
            <h1 className="font-bold text-3xl">Product Information</h1>
            <p className="text-xl">
              <span className="font-bold">Product Id:</span> {_id}
            </p>
            <p className="text-xl">
              <span className="font-bold">Product Name:</span> {product_name}
            </p>
            <p className="text-xl">
              <span className="font-bold">Sell Time: </span>
              {date}
            </p>
            <p className="text-xl">
              <span className="font-bold">Name:</span> {product_name}
            </p>
            <p className="text-xl">
              <span className="font-bold">Product Location:</span>{" "}
              {product_location}
            </p>
            <p className="text-xl text-justify">
              <span className="font-bold">Details:</span> {details}
            </p>
            <p className="text-xl text-justify">
              <span className="font-bold">Product Available:</span>{" "}
              {product_quantity}
            </p>
          </div>
          {/* ------------------------------- */}
          <div className="flex justify-end">
            <div className="mt-6 w-[400px] border-2 border-black py-6 px-4">
              <p className="text-xl">
                <span className="font-bold">Production Cost:</span>{" "}
                <span className="text-black font-bold">
                  {production_cost}.00
                </span>
                USD
              </p>
              <p className="text-xl">
                <span className="font-bold mr-4">TAX(%):</span>
                <span className="text-black font-bold">7.5</span>
              </p>
              <p className="text-xl">
                <span className="font-bold mr-4">Profit(%):</span>
                <span className="text-black font-bold">{profit}</span>
              </p>
              <p className="text-xl">
                <span className="font-bold mr-4">Discount(%):</span>
                <span className="text-black font-bold">{discount}</span>
              </p>
              <p className="text-xl">
                <span className="font-bold mr-4">Selling Price:</span>
                <span className="text-black font-bold">
                  {selling_price} USD
                </span>
              </p>
              <p className="text-xl">
                <span className="font-bold mr-4">Final Price:</span>
                <span className="text-black font-bold">
                  {finalSellPrice} USD
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* ------------------------------- */}
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className="mt-10 p-4 bg-custom-main hover:bg-black hover:text-white font-bold"
          >
            GET PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
