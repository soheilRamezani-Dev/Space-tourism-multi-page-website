import { useContext } from "react";
import destinationContext from "../../../context/destinationContext";

const DestinationInfo = () => {
  const { destination } = useContext(destinationContext);
  const destinationInfo = destination.info;
  return (
    <div className="destination-info row ms-5">
      {destinationInfo.map((val) => {
        return (
          <div className="col-6">
            <div className="pt-4 fs-sm fw-light">
              <small>{val.name}</small>
            </div>
            <h5 className="fw-light pt-2">{val.value}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default DestinationInfo;
