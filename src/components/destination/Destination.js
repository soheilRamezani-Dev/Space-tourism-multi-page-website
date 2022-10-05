import "./destination.css";
import DestinationLeft from "./destination-left/DestinationLeft";
import DestinationRight from "./destination-right/DestinationRight";

const Destination = () => {
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
