import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useProducts from "../../../Hooks/useProducts";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useClient from "../../../Hooks/useClient";
import useShop from "../../../Hooks/useShop";
const ManagerHome = () => {
  const { user } = useAuth();
  const [products, refetch] = useProducts();

  const [client] = useClient();
  const axiosSecure = useAxiosSecure();
  const [shop] = useShop();
  const handleDeleteProduct = (product) => {
    console.log(product);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4FB5FF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/products/${product._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            const newProductCount = shop?.product_count + 1;
            axiosSecure
              .patch(`/shop/${client.shop_id}`, {
                product_count: newProductCount,
              })
              .then((res) => {
                console.log(res.data);
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              });
          }
        });
      }
    });
  };

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
              {products?.map((product, index) => (
                <tr key={product._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      className="w-[75px] h-[75px]"
                      src={product.image}
                      alt=""
                    />
                  </td>
                  <td>{product.product_name}</td>
                  <td>{product.product_quantity}</td>
                  <td>{product.sale_count}</td>

                  <td>
                    <Link to={`/dashboard/update-product/${product._id}`}>
                      <button className="btn bg-black ">
                        <FaEdit className="text-white"></FaEdit>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteProduct(product)}
                      className="btn bg-[#B91C1C] "
                    >
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
