import { useContext } from "react";
import destinationContext from "../../../context/destinationContext";

const DestinationImage = () => {
  const {destination} = useContext(destinationContext);
    return <div className="w-100 d-flex justify-content-end">

        <img className="destination-img" src={process.env.PUBLIC_URL + '/images/destination/'+destination.img} /> 
  </div>
}
 
export default DestinationImage;