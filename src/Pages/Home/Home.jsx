import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Sponsors from "./Sponsors/Sponsors";
import AboutUs from "./AboutUs/AboutUs";
import Reviews from "./Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>InventiSync | Home</title>
      </Helmet>

      <Banner></Banner>
      <Sponsors></Sponsors>
      <AboutUs></AboutUs>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
