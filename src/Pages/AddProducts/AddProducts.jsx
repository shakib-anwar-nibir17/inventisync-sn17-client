import { useForm } from "react-hook-form";
import useClient from "../../Hooks/useClient";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";
import useShop from "../../Hooks/useShop";
// import { useNavigate } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMGBB_API;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProducts = () => {
  // const navigate = useNavigate();
  const [client] = useClient();
  console.log(client);
  const axiosSecure = useAxiosSecure();
  const [shops, refetch] = useShop();
  console.log(shops?.product_count);
  const { register, handleSubmit, reset } = useForm();

  //handle function
  const onSubmit = async (data) => {
    const imageFile = new FormData();
    imageFile.append("image", data.image[0]);
    // console.log(imageFile);
    // console.log(data);
    //
    const res = await axios.post(image_hosting_url, imageFile);
    console.log(res.data);
    const image = res.data.data.display_url;

    const costInt = parseFloat(data.production_cost);
    const totalProductionCost = costInt + 7.5;
    const profitInt = parseFloat(data.profit);
    const sellingPrice = (
      totalProductionCost +
      totalProductionCost * (profitInt / 100)
    ).toFixed(2);
    console.log(sellingPrice);

    const productData = {
      date: new Date(),
      sale_count: 0,
      selling_price: sellingPrice,
      details: data.details,
      discount: data.discount,
      product_name: data.product_name,
      production_cost: data.production_cost,
      product_location: data.product_location,
      profit: data.profit,
      product_quantity: data.product_quantity,
      image: image,
      owner_name: client.name,
      email: client.email,
      shop_id: client.shop_id,
      shop_name: client.shop_name,
    };

    const response = await axiosSecure.post("/products", productData);
    console.log(response.data);
    if (response.data.insertedId) {
      reset();
      const newProductCount = shops?.product_count - 1;
      axiosSecure
        .patch(`/shop/${client.shop_id}`, {
          product_count: newProductCount,
        })
        .then((res) => {
          console.log(res);
          refetch();
          //-----------
          Swal.fire({
            title: "Congrats",
            text: "Your Product has been added to the database",
            icon: "success",
          });
        });
    }
  };
  return (
    <div className="mt-10">
      <div className="w-[70%] mx-auto border-2 border-black py-10 px-16">
        <h1 className="text-center text-5xl font-bold mb-10">ADD PRODUCTS</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
            {/* Product Name */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Product Name*
                </span>
              </label>
              <input
                type="text"
                placeholder="Product Name"
                {...register("product_name", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>

            {/* Production Cost */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Production Cost*(USD)
                </span>
              </label>
              <input
                type="text"
                placeholder="Production Cost"
                {...register("production_cost", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
            {/* Product Quantity */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Product Quantity*
                </span>
              </label>
              <input
                type="number"
                min={0}
                placeholder="Product Quantity"
                {...register("product_quantity", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>

            {/* Production Location */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Production Location*
                </span>
              </label>
              <input
                type="text"
                placeholder="Production Location"
                {...register("product_location", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
            {/* Profit */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Profit*
                </span>
              </label>
              <input
                type="text"
                placeholder="Profit"
                {...register("profit", { required: true })}
                required
                className="input input-bordered w-full"
              />
            </div>

            {/* Discount */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Discount*
                </span>
              </label>
              <input
                type="text"
                placeholder="Discount"
                {...register("discount", { required: true })}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text text-custom-main2 font-extrabold">
                Shop Logo*
              </span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full border-custom-main2"
            />
          </div>
          {/* product description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-custom-main2 font-extrabold">
                Shop Info*
              </span>
            </label>
            <textarea
              {...register("details", { required: true })}
              className="textarea textarea-bordered h-24"
              placeholder="Details"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              disabled={shops?.product_count === 0}
              className="btn bg-white border-2 border-black text-black font-semibold hover:bg-black hover:text-white"
              type="submit"
              value="Add Product"
            />
          </div>
          {/* {shop?.product_count === 0 && (
            // Use conditional rendering to show Swal.fire and navigate if product_count is 0
            <>
              {Swal.fire({
                position: "top-end",
                icon: "question",
                title: "Your have reached your product limit count",
                showConfirmButton: false,
                timer: 1500,
              })}
              {navigate("/")}
            </>
          )} */}
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
