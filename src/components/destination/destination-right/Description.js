import { useContext } from "react";
import destinationContext from "../../../context/destinationContext";

const Description = () => {

  const {destination} = useContext(destinationContext);
  return (
    <>
      <h2 className="w-100 ms-5 mt-5 fw-light">{destination.name}
</h2>
      <p className="fw-light ms-5">
{destination.explain}
      </p>
    </>
  );
};

export default Description;
