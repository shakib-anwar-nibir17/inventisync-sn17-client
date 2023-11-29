import { Helmet } from "react-helmet-async";
import useSales from "../../Hooks/useSales";
import SaleHistory from "./SaleHistory";

const SalesSummary = () => {
  const [sales] = useSales();
  const totalIncome = sales
    .reduce((total, item) => total + item.income, 0)
    .toFixed(2);

  const production_cost = sales.reduce(
    (total, product) => total + parseFloat(product.production_cost),
    0
  );
  const totalTax = 7.5 * sales.length;
  const totalInvestment = (totalTax + production_cost).toFixed(2);
  return (
    <div>
      <Helmet>
        <title>InventiSync | Sales Summary</title>
      </Helmet>
      <h2 className="text-center font-bold text-5xl mt-24 mb-20">
        Sales Summary
      </h2>
      <div className="flex justify-center">
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Total Income</div>
            <div className="stat-value">
              {totalIncome} <small className="text-sm">USD</small>
            </div>
            <div className="stat-desc">Total sale: {sales.length}</div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Invest</div>
            <div className="stat-value">
              {totalInvestment} <small className="text-sm">USD</small>
            </div>
          </div>

          <div className="stat">
            <div className="stat-title">Total Profit</div>
            <div className="stat-value">
              {(totalIncome - totalInvestment).toFixed(2)}{" "}
              <small className="text-sm">USD</small>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <SaleHistory></SaleHistory>
      </div>
    </div>
  );
};

export default SalesSummary;
