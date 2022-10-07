import "./header.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <section className="header">
        <nav class="navbar navbar-dark navbar-expand-lg ">
          <div class="header-container">
            <div className="row">
              <div className="logo col-2 d-flex justify-content-center mt-2">
                <a class="navbar-brand" href="#">
                  <img
                    src={process.env.PUBLIC_URL + "/images/shared/logo.svg"}
                  />
                </a>
              </div>
              <div className="d-block d-md-none col-10 d-flex flex-row-reverse">
                <button
                  class="navbar-toggler"
                  type="button"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
              </div>

              <div className="d-none d-lg-block line col-lg-3"></div>
              <div class="navbar-items col-lg-7 col-md-10 d-flex justify-content-center d-none d-md-block">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <NavLink
                      to="/"
                      end
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <span className="nav-link">
                        <span className="fw-bold">00</span>
                        <span className="fw-light"> HOME</span>
                      </span>
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                      to="destination"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <span className="nav-link">
                        <span className="fw-bold">01</span>
                        <span className="fw-light"> DESTINATION</span>
                      </span>
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                      to="crew"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <span className="nav-link">
                        <span className="fw-bold">02</span>
                        <span className="fw-light"> CHEW</span>
                      </span>
                    </NavLink>
                  </li>
                  <li class="nav-item">
                    <NavLink
                      to="technology"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      <span className="nav-link">
                        <span className="fw-bold">03</span>
                        <span className="fw-light"> TECHNOLOGY</span>
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <Outlet />
    </>
  );
};

export default Header;
