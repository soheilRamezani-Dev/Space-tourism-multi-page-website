import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="containar">
        <div className="row home-content">
          <BodyLeft/>
          <BodyRight/>
        </div>
      </div>
    </div>
  );
};

export default Home;
