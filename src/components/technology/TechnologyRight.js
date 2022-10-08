import { useContext } from "react";
import technologyContext from "../../context/technologyContext";

const TechnologyRight = () => {
  const {technology} = useContext(technologyContext)
  return (
    <div className="technology-right col-lg-4 flex-wrap d-flex justify-content-center d-none d-lg-block">
      <img src={process.env.PUBLIC_URL + "/images/technology/"+technology.img} />
    </div>
  );
};

export default TechnologyRight;
