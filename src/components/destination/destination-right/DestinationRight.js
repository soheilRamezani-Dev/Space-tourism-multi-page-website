import Description from "./Description";
import DestinationInfo from "./DestinationInfo";
import DestinationTabs from "./Tabs";

const DestinationRight = () => {
  return (
    <div className="destination-right col-lg-6 d-flex flex-column ps-5">
      <div className="destination-right-content w-50">
        <DestinationTabs />

        <Description />
        <div className="line ms-5"></div>
        <DestinationInfo/>
      </div>
    </div>
  );
};

export default DestinationRight;
