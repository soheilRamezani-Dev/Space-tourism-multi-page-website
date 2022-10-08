import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";
import "./home.css";

const Home = () => {
  return (
    <div className="home pt-5">
      <div className="containar pt-5">
        <div className="row home-content pt-5">
          <BodyLeft/>
          <BodyRight/>
        </div>
      </div>
    </div>
  );
};

export default Home;
