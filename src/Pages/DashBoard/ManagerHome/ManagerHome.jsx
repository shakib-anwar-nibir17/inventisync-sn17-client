import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useProducts from "../../../Hooks/useProducts";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
const ManagerHome = () => {
  const { user } = useAuth();
  const [products] = useProducts();
  console.log(products);
  return (
    <div>
      <h2 className="text-4xl px-4">
        Welcome to Manager Home{" "}
        <span className="text-custom-main2">{user?.displayName}</span>
      </h2>
      <div className="bg-white w-[70%] mx-auto p-6">
        <div>
          <div className="mt-10 border-2 border-black py-4 flex justify-between px-4">
            <p className="text-3xl">
              Total {products.length} Products has been Added
            </p>
            <Link to="/dashboard/add-products">
              <button className="p-4 bg-custom-main font-extrabold hover:bg-custom-main2 hover:text-white">
                Add Button
              </button>
            </Link>
          </div>
        </div>
        {/* ______________________________table ________________ */}
        <div className="overflow-x-auto mt-5">
          <table className="table table-zebra">
            {/* head */}
            <thead className=" text-white">
              <tr>
                <th className="rounded-tl-xl py-4 bg-custom-main2"></th>
                <th className="py-4 bg-custom-main2">Product Image</th>
                <th className="py-4 bg-custom-main2">Product Name</th>
                <th className="py-4 bg-custom-main2">Product Quantity</th>
                <th className="py-4 bg-custom-main2">Sale Count</th>
                <th className="py-4 bg-custom-main2">Action</th>
                <th className="rounded-tr-xl py-4 bg-custom-main2">Action</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-[75px] h-[75px]"
                      src={item.image}
                      alt=""
                    />
                  </td>
                  <td>{item.product_name}</td>
                  <td>{item.product_quantity}</td>
                  <td>{item.sale_count}</td>

                  <td>
                    <button className="btn bg-black ">
                      <FaEdit className="text-white"></FaEdit>
                    </button>
                  </td>
                  <td>
                    <button className="btn bg-[#B91C1C] ">
                      <FaTrashAlt className="text-white"></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagerHome;
