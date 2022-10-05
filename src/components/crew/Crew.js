import "./crew.css";
import CrewLeft from "./crew-left/CrewLeft";
import CrewRight from "./CrewRight";

const Crew = () => {
  return (
    <div className="crew">
      <div className="containar">
        <div className="row">
          <CrewLeft />
          <CrewRight/>
        </div>
      </div>
    </div>
  );
};

export default Crew;
