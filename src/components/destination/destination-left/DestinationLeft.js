import DestinationImage from "./DestinationImage";
import DestinationTitle from "./DestinationTitle";

const DestinationLeft = () => {
  return (
    <div className="destination-left col-lg-6 flex-wrap d-flex justify-content-center">
      <DestinationTitle/>
      <DestinationImage/>
    </div>
  );
};

export default DestinationLeft;
