import { useLoaderData } from "react-router-dom";
import useShop from "../../Hooks/useShop";
import { FaEnvelope, FaHome, FaSearchLocation } from "react-icons/fa";
import moment from "moment";

const CheckOut = () => {
  const product = useLoaderData();
  const [shops] = useShop();
  console.log(shops);
  const date = moment().format("dddd, MMMM Do YYYY, h:mm a");
  const {
    selling_price,
    details,
    discount,
    product_name,
    production_cost,
    product_location,
    profit,
    product_quantity,
  } = product;
  return (
    <div className="mt-10">
      <div className="w-[70%] mx-auto border-2 border-black py-10 px-16">
        <h1 className="text-center text-3xl font-bold mb-10">
          ChecK Out Page for{" "}
          <span className="text-custom-main2">{product_name}</span>
        </h1>
        <div className="border-2 border-custom-main px-4 py-6">
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
          <div className="mt-24 space-y-2">
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
          <div className="mt-24 space-y-3">
            <h1 className="font-bold text-3xl">Product Information</h1>
            <p className="text-xl">
              <span className="font-bold">Product Id:</span> {product._id}
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
            <div className="mt-24 w-[400px] border-2 border-black py-6 px-4">
              <p className="text-xl">
                <span className="font-bold">Production Cost:</span>{" "}
                <span className="text-custom-main2 font-bold">
                  {production_cost}
                </span>
                USD
              </p>
              <p className="text-xl">
                <span className="font-bold mr-4">TAX(%):</span>
                <span className="text-custom-main2 font-bold">7.5</span>
              </p>
              <p className="text-xl">
                <span className="font-bold mr-4">Profit(%):</span>
                <span className="text-custom-main2 font-bold">{profit}</span>
              </p>
              <p className="text-xl">
                <span className="font-bold mr-4">Discount(%):</span>
                <span className="text-custom-main2 font-bold">{discount}</span>
              </p>
              <p className="text-xl">
                <span className="font-bold mr-4">Selling Price:</span>
                <span className="text-custom-main2 font-bold">
                  {selling_price} USD
                </span>
              </p>
            </div>
          </div>
          {/* ------------------------------- */}
          <div className="flex justify-center">
            <button className="mt-24 p-4 bg-custom-main hover:bg-custom-main2 hover:text-white font-bold">
              GET PAID
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
