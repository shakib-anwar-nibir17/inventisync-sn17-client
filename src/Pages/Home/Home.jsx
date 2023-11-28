import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Sponsors from "./Sponsors/Sponsors";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>InventiSync | Home</title>
      </Helmet>

      <Banner></Banner>
      <Sponsors></Sponsors>
    </div>
  );
};

export default Home;
