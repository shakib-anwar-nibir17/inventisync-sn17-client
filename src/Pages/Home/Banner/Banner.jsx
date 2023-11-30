import banner from "../../../assets/banner.png";
const Banner = () => {
  return (
    <div className="bg-custom-main2 min-h-[92vh] flex flex-col items-center justify-center text-center ">
      <h1 className="text-7xl font-extrabold w-3/4 mx-auto">
        InventiSync Redefining Retail Rhythms, One Click at a Time!
      </h1>
      <h4 className="text-xl font-bold mt-6 w-3/4 mx-auto">
        InventiSync is not just your ordinary inventory manager; it is the
        game-changer you have been waiting for. Supercharge your shop
        operations. Our mission is to empower entrepreneurs with the tools they
        need to thrive in the competitive world of e-commerce.
      </h4>
      <div className="space-x-4 mt-6 rounded-xl">
        <button className=" bg-black text-white border-black hover:bg-custom-main p-4 hover:text-black hover:font-extrabold rounded-2xl">
          Explore Opportunities
        </button>
      </div>
      <img className="lg:mt-10" src={banner} alt="" />
    </div>
  );
};

export default Banner;
