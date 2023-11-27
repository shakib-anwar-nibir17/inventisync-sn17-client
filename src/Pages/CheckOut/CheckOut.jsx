import { useLoaderData } from "react-router-dom";
import useShop from "../../Hooks/useShop";
import { FaHome } from "react-icons/fa";

const CheckOut = () => {
  const product = useLoaderData();
  const [shop] = useShop();
  console.log(shop);
  const {
    _id,
    date,
    sale_count,
    selling_price,
    details,
    discount,
    product_name,
    production_cost,
    product_location,
    profit,
    product_quantity,
    image,
    owner_name,
    email,
    shop_id,
    shop_name,
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
              <img src={shop?.logo_pic} alt="" />
            </div>
            <div className="text-5xl font-bold">
              <h1 className="text-xl">Invoice...........</h1>
              <h1>{shop.shop_name}</h1>
            </div>
          </div>
          {/* ------------------------------- */}
          <div className="mt-24">
            <h1 className="font-bold text-2xl">Shop Info</h1>
            <p className="flex gap-2">
              <span className="font-bold flex space-x-2 items-center">
                <FaHome></FaHome>Name:
              </span>{" "}
              {shop.shop_name}
            </p>
            <p className="flex gap-2">
              <span className="font-bold flex space-x-2 items-center">
                <FaHome></FaHome>Name:
              </span>{" "}
              {shop.shop_name}
            </p>
            <p>
              <span className="font-bold">Location</span> {shop.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
