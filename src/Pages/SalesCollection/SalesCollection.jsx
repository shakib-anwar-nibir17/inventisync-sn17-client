import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import { FaMoneyBill } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const SalesCollection = () => {
  const [products] = useProducts();
  return (
    <div>
      <Helmet>
        <title>InventiSync | Sales Collection</title>
      </Helmet>
      <h2 className="text-4xl px-4">Welcome to Manager Home</h2>
      <div className="bg-white w-[90%] mx-auto p-6">
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
                <th className="py-4 bg-custom-main2">Product ID</th>
                <th className="py-4 bg-custom-main2">Product Image</th>
                <th className="py-4 bg-custom-main2">Product Name</th>
                <th className="py-4 bg-custom-main2">Product Quantity</th>
                <th className="py-4 bg-custom-main2">Product Discount(%)</th>
                <th className="py-4 bg-custom-main2">Sale Price</th>
                <th className="py-4 bg-custom-main2">Sell to Customer</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, index) => (
                <tr key={product._id}>
                  <th>{index + 1}</th>
                  <td>{product._id}</td>
                  <td>
                    <img
                      className="w-[75px] h-[75px]"
                      src={product.image}
                      alt=""
                    />
                  </td>
                  <td>{product.product_name}</td>
                  <td>{product.product_quantity}</td>
                  <td>{product.discount}</td>
                  <td>{product.selling_price}</td>

                  <td>
                    <Link to={`/dashboard/check-out/${product._id}`}>
                      <button className="btn bg-black text-white hover:btn-primary">
                        <FaMoneyBill></FaMoneyBill>
                      </button>
                    </Link>
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

export default SalesCollection;
