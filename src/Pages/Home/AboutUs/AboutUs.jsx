const AboutUs = () => {
  return (
    <div className="container lg:h-[720px] bg-black mx-auto rounded-3xl mt-20 mb-10 pb-10">
      <h1 className=" text-4xl lg:text-6xl font-bold text-white mb-10 text-center pt-20 w-3/4 mx-auto">
        What Makes InventiSync one of the best choice for your business{" "}
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
        <div className="bg-custom-main2 text-black rounded-full w-[350px] h-[350px] flex justify-center items-center text-center">
          <div className="p-10 space-y-4">
            <h2 className="text-4xl font-bold">Super-Simple Claims</h2>
            <p className="text-2xl">
              Smartphone enabled self-inspection processes takes minutes!
            </p>
          </div>
        </div>
        <div className="bg-custom-main2 text-black rounded-full w-[350px] h-[350px] flex justify-center items-center text-center">
          <div className="p-10 space-y-4">
            <h2 className="text-4xl font-bold">Loved by Customers!</h2>
            <p className="text-2xl">We are trusted by 100k customers.</p>
          </div>
        </div>
        <div className="bg-custom-main2 text-black rounded-full w-[350px] h-[350px] flex justify-center items-center text-center">
          <div className="p-10 space-y-4">
            <h2 className="text-4xl font-bold">More TLC, Less T&C.</h2>
            <p className="text-2xl">
              No hidden clauses, jargon free documents in simple language
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
