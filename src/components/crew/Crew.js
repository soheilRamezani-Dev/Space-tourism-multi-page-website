import "./crew.css";
import CrewLeft from "./crew-left/CrewLeft";

const Crew = () => {
  return (
    <div className="crew">
      <div className="containar">
        <div className="row">
          <CrewLeft />
          <div className="crew-left col-lg-4 flex-wrap d-flex justify-content-center">
            fgb
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
