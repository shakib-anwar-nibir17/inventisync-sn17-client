import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style/style.css";

// import required modules
import { Pagination } from "swiper/modules";
import useSales from "../../Hooks/useSales";
const SaleHistory = () => {
  const [sales] = useSales();
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      className="mySwiper w-[500px] h-[500px] border-2 border-black"
    >
      {sales?.map((sale) => (
        <SwiperSlide key={sale._id}>
          <div className="flex justify-center mt-10">
            <div className="card h-[300px] text-black font-bold border-2 border-black">
              <div className="card-body">
                <h2 className="card-title">{sale.product_name}</h2>
                <p>DATE:{sale.dateToday} GMT+6</p>
                {/* <p>
                  Profit:
                  {(
                    parseFloat(sale.income) -
                    parseFloat(sale.production_cost) -
                    7.5
                  ).toFixed(2)}{" "}
                  <small className="text-sm">USD</small>
                </p> */}
                <p>
                  Profit:
                  {(() => {
                    const profit =
                      Number(sale.income) - Number(sale.production_cost) - 7.5;
                    return profit.toFixed(2);
                  })()}
                  <small className="text-sm">USD</small>
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SaleHistory;
