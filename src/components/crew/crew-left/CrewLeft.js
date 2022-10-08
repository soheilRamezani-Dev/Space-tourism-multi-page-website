import CrewContent from "./CrewContent";
import CrewPagination from "./CrewPagination";
import CrewTitle from "./CrewTitle";

const CrewLeft = () => {
  return (
    <div className="crew-left col-lg-8 flex-wrap d-flex justify-content-center">
      <div className="w-75">
        <CrewTitle />
        <CrewContent />
        <CrewPagination />
      </div>
    </div>
  );
};

export default CrewLeft;
