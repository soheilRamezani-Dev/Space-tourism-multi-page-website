import { useContext } from "react";
import technologyContext from "./../../../context/technologyContext";

const TechnologtImgMobile = () => {
    const {technology} = useContext(technologyContext)
    return (
      <div className="technology-right col-lg-4 flex-wrap d-flex justify-content-center d-lg-none">
        <img src={process.env.PUBLIC_URL + "/images/technology/"+technology.mobile_img} />
      </div>
    );
}
 
export default TechnologtImgMobile;