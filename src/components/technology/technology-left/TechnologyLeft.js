import TechnologyContent from "./TechnologyContent";
import TechnologtImgMobile from "./TechnologyImgMobile";
import TechnologyPagination from "./TechnologyPagination";
import TechnologyTitle from "./TechnologyTitle";

const TechnologyLeft = () => {
  return (
    <div className="technology-left col-lg-7 flex-wrap d-flex justify-content-center">
      <div className="w-75">
        <TechnologyTitle/>
        <div className="technology-content row">
          <TechnologtImgMobile/>
          <TechnologyPagination/>
          <TechnologyContent/>
        </div>
      </div>
    </div>
  );
};

export default TechnologyLeft;
