import TechnologyLeft from "./technology-left/TechnologyLeft";
import './technology.css'
import TechnologyRight from "./TechnologyRight";

const Technology = () => {
  return (
    <div className="technology">
      <div className="containar">
        <div className="row">
          <TechnologyLeft />
          <TechnologyRight />
        </div>
      </div>
    </div>
  );
};

export default Technology;
