import "./destination.css";
import DestinationLeft from "./DestinationLeft";

const Destination = () => {
  return (
    <div className="destination">
      <div className="containar">
        <div className="row destination-content">
          <DestinationLeft />
          <div className="destination-right col-lg-6 d-flex flex-column ps-5">
            <div className="destination-right-content w-50">
              <div className="w-100 ms-5 ">
                <ul class="nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      MOON
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      MARS
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      EUROPA
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      TITAN
                    </a>
                  </li>
                </ul>
              </div>

              <h2 className="w-100 ms-5 mt-5 fw-light">MOON</h2>
              <p className="fw-light ms-5">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </p>
              <div className="line ms-5"></div>
              <div className="destination-info row ms-5">
                <div className="col-6">
                  <div className="pt-4 fs-sm fw-light">
                    <small>AVG. DISTANCE</small>
                  </div>
                  <h5 className="fw-light pt-2">384,400 km</h5>
                </div>
                <div className="col-6">
                  <div className="pt-4 fs-sm fw-light">
                    <small>Est. travel time</small>
                  </div>
                  <h5 className="fw-light pt-2">3 days</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
