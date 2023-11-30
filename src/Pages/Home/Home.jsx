import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Sponsors from "./Sponsors/Sponsors";
import AboutUs from "./AboutUs/AboutUs";
import Reviews from "./Reviews/Reviews";
import GetApp from "./GetApp/GetApp";
import Vision from "./Vision/Vision";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>InventiSync | Home</title>
      </Helmet>

      <Banner></Banner>
      <Vision></Vision>
      <Sponsors></Sponsors>
      <AboutUs></AboutUs>
      <Reviews></Reviews>
      <GetApp></GetApp>
    </div>
  );
};

export default Home;
