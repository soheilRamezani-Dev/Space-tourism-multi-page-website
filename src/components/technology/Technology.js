import TechnologyLeft from "./technology-left/TechnologyLeft";
import './technology.css'

const Technology = () => {
  return (
    <div className="technology">
      <div className="containar">
        <div className="row">
          <TechnologyLeft />
        </div>
      </div>
    </div>
  );
};

export default Technology;
