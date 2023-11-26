import useClient from "../../Hooks/useClient";

const CreateShop = () => {
  const [client] = useClient();
  const user = client[0];
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const logo = form.logo.value;
    const location = form.location.value;
    const shop_name = form.shop_name.value;
    const details = form.details.value;
    console.log(name, email, logo, location, shop_name, details);
  };

  return (
    <div>
      <h1 className="text-center mt-10 text-7xl">Welcome to Create Shop</h1>
      <div className="w-3/4 mx-auto shadow-xl px-6 py-6">
        <form onSubmit={handleSubmit}>
          {/* Shop Owner Name*/}
          <div className="flex gap-6">
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Shop Owner Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Name"
                defaultValue={user?.name}
                readOnly
                name="name"
                required
                className="input input-bordered w-full"
              />
            </div>
            {/* Shop Owner Email */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Shop Owner Email
                </span>
              </label>
              <input
                type="email"
                placeholder="email"
                defaultValue={user?.email}
                readOnly
                name="email"
                required
                className="input input-bordered w-full"
              />
            </div>
          </div>
          <div className="flex gap-6">
            {/* Shop Name */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Shop Name*
                </span>
              </label>
              <input
                type="text"
                placeholder="Shop name"
                name="shop_name"
                className="input input-bordered w-full"
              />
            </div>
            {/* Shop logo */}
            <div className="form-control w-full my-6">
              <label className="label">
                <span className="label-text text-custom-main2 font-extrabold">
                  Shop Logo*
                </span>
              </label>
              <input
                name="logo"
                type="file"
                className="file-input w-full border-custom-main2"
              />
            </div>
          </div>
          {/* Shop Location */}
          <div className="form-control w-full my-6">
            <label className="label">
              <span className="label-text text-custom-main2 font-extrabold">
                Shop Location*
              </span>
            </label>
            <input
              type="text"
              placeholder="Shop name"
              name="location"
              className="input input-bordered w-full"
            />
          </div>
          {/* Shop Info */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-custom-main2 font-extrabold">
                Shop Info*
              </span>
            </label>
            <textarea
              name="details"
              className="textarea textarea-bordered h-24"
              placeholder="Details"
            ></textarea>
            <div className="form-control mt-6">
              <input
                className="btn bg-white border-2 border-black text-black font-semibold hover:bg-black hover:text-white"
                type="submit"
                value="Register"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateShop;
