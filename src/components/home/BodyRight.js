import { NavLink } from "react-router-dom";

const BodyRight = () => {
  return (
    <div className="col-lg-6 p-5 pt-0">
      <NavLink to="/destination">
        <div
          role="button"
          className="explore-button rounded-circle bg-white d-flex align-items-center justify-content-center"
        >
          <span>EXPLORE</span>
        </div>
      </NavLink>
    </div>
  );
};

export default BodyRight;
