import useSales from "../../Hooks/useSales";

const SalesSummary = () => {
  const [sales] = useSales();
  console.log(sales);
  return (
    <div>
      <h2>Sales Summary</h2>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-title">Total Sale</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Invest</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">Total Profit</div>
          <div className="stat-value">1,200</div>
        </div>
      </div>
    </div>
  );
};

export default SalesSummary;
