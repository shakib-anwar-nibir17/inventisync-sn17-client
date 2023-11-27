import { useForm } from "react-hook-form";
import useAxiosManager from "../../Hooks/useAxiosManager";
import useClient from "../../Hooks/useClient";

const image_hosting_key = import.meta.env.VITE_IMGBB_API;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProducts = () => {
  const [client] = useClient();
  const shopOwner = client[0];
  console.log(shopOwner);
  const axiosManager = useAxiosManager();
  const { register, handleSubmit } = useForm();

  //handle function
  const onSubmit = (data) => {
    const imageFile = new FormData();
    imageFile.append("image", data.image[0]);
    // console.log(imageFile);
    // console.log(data);
    //
    const {
      details,
      discount,
      product_name,
      production_cost,
      product_location,
      profit,
      product_quantity,
    } = data;
    console.log(data.production_cost);
    const costInt = parseFloat(production_cost);
    const totalProductionCost = costInt + 7.5;
    const profitInt = parseFloat(profit);
    const sellingPrice = (
      totalProductionCost +
      totalProductionCost * (profitInt / 100)
    ).toFixed(2);
    console.log(sellingPrice);

    const date = new Date();
    console.log(date);
    // axiosManager.post(image_hosting_url, imageFile).then((res) => {
    //   console.log(res.data.data);
    // });
    // const productData = {
    //   email,
    //   shop_id,
    //   shop_name,
    //   date: new Date(),
    //   cost:

    // };
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
                  Production Cost*
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
                type="text"
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
                {...register("production_location", { required: true })}
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
              className="btn bg-white border-2 border-black text-black font-semibold hover:bg-black hover:text-white"
              type="submit"
              value="Add Product"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
