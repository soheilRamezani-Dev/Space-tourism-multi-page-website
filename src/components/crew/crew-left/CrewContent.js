import { useContext } from "react";
import crewContext from "../../../context/crewContext";

const CrewContent = () => {
  const { crew } = useContext(crewContext);
  return (
    <div className="crew-content">
      <h5 className="w-100 ms-5 mt-5 fw-light text-secondary">{crew.role}</h5>
      <h4 className="w-100 ms-5 mt-2 fw-light">{crew.name}</h4>
      <p className="fw-light ms-5 w-75">{crew.explain} </p>
    </div>
  );
};

export default CrewContent;
