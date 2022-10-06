import "./destination.css";
import DestinationLeft from "./destination-left/DestinationLeft";
import DestinationRight from "./destination-right/DestinationRight";
import { useParams } from "react-router-dom";
const Destination = () => {
  const urlParams = useParams();
  console.log(urlParams.destinationName);

  return (
    <div className="destination">
      <div className="containar">
        <div className="row destination-content">
          <DestinationLeft />
          <DestinationRight />
        </div>
      </div>
    </div>
  );
};

export default Destination;
