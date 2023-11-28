import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMGBB_API;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProducts = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const product = useLoaderData();
  const {
    _id,
    details,
    discount,
    product_name,
    production_cost,
    product_location,
    profit,
    product_quantity,
  } = product;
  console.log(product);

  const { register, handleSubmit } = useForm();

  //handle function
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_url, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const image = res.data.data.display_url;
    //
    const costInt = parseFloat(data.production_cost);
    const totalProductionCost = costInt + 7.5;
    const profitInt = parseFloat(profit);
    const sellingPrice = (
      totalProductionCost +
      totalProductionCost * (profitInt / 100)
    ).toFixed(2);
    const updatedProduct = {
      details: data.details,
      discount: data.discount,
      product_name: data.product_name,
      production_cost: data.production_cost,
      product_location: data.product_location,
      profit: data.profit,
      product_quantity: data.product_quantity,
      image: image,
      selling_price: sellingPrice,
    };
    console.log(updatedProduct);
    const response = await axiosSecure.put(`/products/${_id}`, updatedProduct);
    console.log(response);
    if (response.data.modifiedCount > 0) {
      // show success popup
      // reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.product_name} is updated.`,
        showConfirmButton: false,
        timer: 1500,
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
                  Product Name
                </span>
              </label>
              <input
                type="text"
                defaultValue={product_name}
                placeholder="Product Name"
                {...register("product_name")}
                required
                className="input input-bordered w-full"
              />
            </div>

            {/* Production Cost */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Production Cost(USD)
                </span>
              </label>
              <input
                type="text"
                placeholder="Production Cost"
                defaultValue={production_cost}
                {...register("production_cost")}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
            {/* Product Quantity */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Product Quantity
                </span>
              </label>
              <input
                type="number"
                min={0}
                placeholder="Product Quantity"
                defaultValue={product_quantity}
                {...register("product_quantity")}
                required
                className="input input-bordered w-full"
              />
            </div>

            {/* Production Location */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Production Location
                </span>
              </label>
              <input
                type="text"
                placeholder="Production Location"
                defaultValue={product_location}
                {...register("product_location")}
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
            {/* Profit */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Profit
                </span>
              </label>
              <input
                type="text"
                placeholder="Profit"
                defaultValue={profit}
                {...register("profit")}
                required
                className="input input-bordered w-full"
              />
            </div>

            {/* Discount */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Discount
                </span>
              </label>
              <input
                type="text"
                placeholder="Discount"
                defaultValue={discount}
                {...register("discount")}
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
              required
              className="file-input w-full border-custom-main2"
            />
          </div>

          {/* product description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-custom-main2 font-extrabold">
                Shop Info
              </span>
            </label>
            <textarea
              defaultValue={details}
              {...register("details")}
              className="textarea textarea-bordered h-24"
              placeholder="Details"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              className="btn bg-white border-2 border-black text-black font-semibold hover:bg-black hover:text-white"
              type="submit"
              value="Update Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
