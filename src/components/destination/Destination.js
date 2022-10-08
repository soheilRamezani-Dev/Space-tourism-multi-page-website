import "./destination.css";
import DestinationLeft from "./destination-left/DestinationLeft";
import DestinationRight from "./destination-right/DestinationRight";
import { useParams } from "react-router-dom";
import destination_api from "../../api/Destination_api";
import destinationContext from "../../context/destinationContext";
import { useState } from "react";

const Destination = () => {
  const [destination, setdestination] = useState({});
  const urlParams = useParams();
  const destinationInfo = destination_api.find(val=>urlParams.destination_name===val.url)
  if(urlParams.destination_name !== destination.url){
    setdestination(destinationInfo);
  }


  return (
    <div className="destination">
      <div className="containar">
        <div className="row destination-content">
          <destinationContext.Provider value={{ destination }}>
            <DestinationLeft />
            <DestinationRight />
          </destinationContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default Destination;
