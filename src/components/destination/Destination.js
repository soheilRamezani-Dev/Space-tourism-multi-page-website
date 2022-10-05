import "./destination.css";

const Destination = () => {
  return (
    <div className="destination">
      <div className="containar">
        <div className="row destination-content">
          <div className="destination-left col-lg-6 flex-wrap d-flex justify-content-center">
            <h5 className="w-100 d-flex justify-content-center">
              <span className="text-secondary m-2 ms-5">01 </span>
              <span className="fw-light m-2"> Pick your destination</span>
            </h5>
            <div className="w-100 d-flex justify-content-end">
                <img className="destination-img" src="images/destination/image-moon.png" />
            </div>
          </div>
          <div className="destination-right col-lg-6 d-flex justify-content-center">
            zdfz
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
