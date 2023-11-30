import AOS from "aos";
import "aos/dist/aos.css";

const Vision = () => {
  AOS.init();
  return (
    <div className="container mx-auto mt-24">
      <h2 className="text-7xl font-extrabold text-center mb-16">OUR VISION</h2>
      <div className="flex">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-1/2 bg-black text-center text-white h-[500px] flex items-center px-6 border-8
       border-custom-main2"
        >
          <div>
            <h1 className="text-4xl mb-10 font-bold">
              Empowering Businesses, Simplifying Operations
            </h1>
            <p className="text-xl">
              We strive to empower businesses of all sizes by providing a
              comprehensive and user-friendly shop management service. Our
              vision is centered around simplifying the complexities of online
              retail, allowing entrepreneurs to focus on what they do
              best—building remarkable products and fostering meaningful
              connections with their customers.
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-row-reverse">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-1/2 bg-white text-center text-black h-[500px] flex items-center px-6 border-8
       border-black"
        >
          <div>
            <h1 className="text-4xl mb-10 font-bold">
              Seamless Integration, Limitless Potential.
            </h1>
            <p className="text-xl">
              We strive to empower businesses of all sizes by providing a
              comprehensive and user-friendly shop management service. Our
              vision is centered around simplifying the complexities of online
              retail, allowing entrepreneurs to focus on what they do
              best—building remarkable products and fostering meaningful
              connections with their customers.
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex ">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-1/2 bg-black text-center text-white h-[500px] flex items-center px-6 border-8
       border-custom-main2"
        >
          <div>
            <h1 className="text-4xl mb-10 font-bold">
              Commitment to Excellence
            </h1>
            <p className="text-xl">
              Our vision is underpinned by a commitment to excellence. We strive
              to continually enhance our platform, staying at the forefront of
              technological advancements. InventiSync aims to be the go-to
              solution for entrepreneurs seeking a reliable, intuitive, and
              feature-rich shop management service.
            </p>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-row-reverse">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-1/2 bg-white text-center text-black h-[500px] flex items-center px-6 border-8
       border-black"
        >
          <div>
            <h1 className="text-4xl mb-10 font-bold">
              Commitment to Excellence
            </h1>
            <p className="text-xl">
              InventiSync dreams of fostering a vibrant community of successful
              businesses. We envision a network where knowledge is shared,
              challenges are overcome collaboratively, and each member thrives
              in the dynamic landscape of e-commerce. Our vision extends beyond
              individual success to the collective achievement of a connected
              and prosperous community.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Vision;
