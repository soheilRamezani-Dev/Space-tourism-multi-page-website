const TechnologyLeft = () => {
  return (
    <div className="technology-left col-lg-7 flex-wrap d-flex justify-content-center">
      <div className="w-75">
        <h5 className="w-75 d-flex justify-content-center">
          <span className="text-secondary m-2 ms-5">03 </span>
          <span className="fw-light m-2"> SPACE LAUNCH 101</span>
        </h5>
        <div className="technology-content row">
          <div className="col-2 d-flex flex-column">
            <span className="technology-pagination technology-pagination-active">
              1
            </span>
            <span className="technology-pagination">2</span>
            <span className="technology-pagination">3</span>
          </div>
          <div className="col-10 mt-3">
            <p className="fw-light">THE TERMINOLOGY…</p>
            <h4>LAUNCH VEHICLE</h4>
            <p className="fw-light w-75">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyLeft;
