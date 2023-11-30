import { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import { Rating, Star } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const customStyles = {
  itemShapes: Star,
  activeFillColor: "#4FB5FF",
  inactiveFillColor: "#00000",
};

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/reviews")
      .then((response) => setReviews(response.data));
  }, []);

  console.log(reviews);

  return (
    <div className="mt-20">
      <h2 className="text-6xl text-center font-bold w-1/2 mx-auto">
        HOW OUR CUSTOMER VALUES OUR EFFORTS
      </h2>
      <div className="w-3/4 mx-auto border-2 border-black mt-20 rounded-3xl">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper my-16"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex justify-center mb-4 mt-10">
                <Rating
                  itemStyles={customStyles}
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
              </div>
              <div className="flex justify-center mt-10">
                <FaQuoteLeft className="text-6xl" />
              </div>
              <div className="text-center w-3/4 mx-auto space-y-4 mt-8 mb-20">
                <p className="text-lg">{review.details}</p>
                <h2 className="text-3xl text-black font-extrabold">
                  {review.name}
                </h2>
              </div>
              <div className="flex justify-center">
                <FaQuoteRight className="text-6xl" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
