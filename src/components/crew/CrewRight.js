import { useContext } from "react";
import crewContext from "../../context/crewContext";

const CrewRight = () => {

  const {crew} = useContext(crewContext);
  return (
    <div className="crew-right col-lg-4 flex-wrap d-flex justify-content-center">
      <img src={process.env.PUBLIC_URL+"/images/crew/"+crew.img} />
    </div>
  );
};

export default CrewRight;
