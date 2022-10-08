import { useContext } from "react";
import technologyContext from "../../../context/technologyContext";

const TechnologyContent = () => {
  const {technology} = useContext(technologyContext);
  return (
    <div className="col-lg-10 mt-3">
      <p className="fw-light">THE TERMINOLOGY…</p>
      <h4>{technology.name}</h4> 
      <p className="fw-light w-lg-75">
      {technology.explain}
      </p>
    </div>
  );
};

export default TechnologyContent;
