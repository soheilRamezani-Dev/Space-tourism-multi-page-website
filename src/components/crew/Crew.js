import "./crew.css";
import CrewLeft from "./crew-left/CrewLeft";
import CrewRight from "./CrewRight";
import { useParams } from "react-router-dom";
import crewContext from "../../context/crewContext";
import { useState } from "react";
import chew_api from "../../api/Chew_api";

const Crew = () => {
  const [crew, setCrew] = useState({});
  const urlParam = useParams();
  const crewInfo = chew_api.find((val) => val.url === urlParam.crew_name);
  //console.log(crewInfo);
  if (urlParam.crew_name !== crew.url) setCrew(crewInfo);
  return (
    <div className="crew">
      <div className="containar">
        <div className="row">
          <crewContext.Provider value={{crew:crew}}>
            <CrewLeft />
            <CrewRight />
          </crewContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Crew;
