import Marquee from "react-fast-marquee";
import image1 from "../../../assets/sponsors/sponsors1.png";
import image2 from "../../../assets/sponsors/sponsors2.png";
import image3 from "../../../assets/sponsors/sponsors3.png";
import image4 from "../../../assets/sponsors/sponsors4.png";
import image5 from "../../../assets/sponsors/sponsors5.png";
import image6 from "../../../assets/sponsors/sponsors6.png";
import image7 from "../../../assets/sponsors/sponsors7.png";
import image8 from "../../../assets/sponsors/sponsors8.png";
import image9 from "../../../assets/sponsors/sponsors9.png";
const Sponsors = () => {
  return (
    <div>
      <h2 className="text-7xl text-center font-bold text-black mt-20 mb-20 hover:text-custom-main2 cursor-pointer">
        We are Sponsored by
      </h2>
      <Marquee speed={100}>
        <img className="w-[150px] h-[100px] mr-4" src={image1} alt="" />
        <img className="w-[150px] h-[100px] mr-4" src={image2} alt="" />
        <img className="w-[150px] h-[100px] mr-4" src={image3} alt="" />
        <img className="w-[150px] h-[100px] mr-4" src={image4} alt="" />
        <img className="w-[150px] h-[100px] mr-4" src={image5} alt="" />
        <img className="w-[150px] h-[100px] mr-4" src={image6} alt="" />
        <img className="w-[150px] h-[100px] mr-4" src={image7} alt="" />
        <img className="w-[150px] h-[100px] mr-4" src={image8} alt="" />
        <img className="w-[150px] h-[100px] mr-4" src={image9} alt="" />
      </Marquee>
    </div>
  );
};

export default Sponsors;
