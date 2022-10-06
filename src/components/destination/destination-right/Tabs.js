import { NavLink } from "react-router-dom";

const DestinationTabs = () => {
  return (
    <div className="w-100 ms-5 ">
      <ul class="nav">
        <li class="nav-item">
          <NavLink to="/destination/moon">
            <span className="nav-link">MOON</span>     
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/destination/mars">         
            <span className="nav-link">MARS</span>     
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/destination/europa">     
            <span className="nav-link">EUROPA</span>     
          </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="/destination/titan">
            <span className="nav-link">TITAN</span>     
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DestinationTabs;
