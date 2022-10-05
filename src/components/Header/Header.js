import "./header.css";

const Header = () => {
  return (
    <section className="header">
      <nav class="navbar navbar-expand-lg ">
        <div class="header-container">
          <div className="row">
            <div className="logo col-lg-2 d-flex justify-content-center mt-2">
              <a class="navbar-brand" href="#">
                <img src="images/shared/logo.svg" />
              </a>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="line col-lg-4"></div>
            <div class="navbar-items collapse navbar-collapse col-lg-6 d-flex justify-content-center" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                  <span className="fw-bold">01</span><span className="fw-light"> HOME</span> 
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                  <span className="fw-bold">02</span><span className="fw-light"> DESTINATION</span> 
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                  <span className="fw-bold">03</span><span className="fw-light"> CREW</span> 
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                  <span className="fw-bold">04</span><span className="fw-light"> TECHNOLOGY</span> 
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Header;
