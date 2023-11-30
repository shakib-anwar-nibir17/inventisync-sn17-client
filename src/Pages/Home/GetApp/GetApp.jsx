import play from "../../../assets/sponsors/pngwing 1.png";
import app from "../../../assets/sponsors/pngwing 2.png";
const GetApp = () => {
  return (
    <div className="mt-20">
      <div
        className="container mx-auto h-[200] bg-black flex py-10 rounded-[45px] items-center justify-between px-6
    "
      >
        <div className="text-white font-bold text-4xl">
          <h2>GET INVENTISYNC APP</h2>
        </div>
        <div className="flex">
          <img src={play} alt="" />
          <img src={app} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GetApp;
