import TechnologyLeft from "./technology-left/TechnologyLeft";
import "./technology.css";
import TechnologyRight from "./TechnologyRight";
import technologyContext from "../../context/technologyContext";
import { useState } from "react";
import technology_api from "../../api/Technology_api";
import { useParams } from "react-router-dom";

const Technology = () => {
  const [technology, setTechnology] = useState({});
  const urlParam = useParams().technology_name;
  const technologyInfo = technology_api.find(val => val.url === urlParam)
  if(urlParam != technology.url){
    setTechnology(technologyInfo);
  }

  return (
    <div className="technology">
      <div className="containar">
        <div className="row">
          <technologyContext.Provider value={{technology:technology}}>
            <TechnologyLeft />
            <TechnologyRight />
          </technologyContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Technology;
