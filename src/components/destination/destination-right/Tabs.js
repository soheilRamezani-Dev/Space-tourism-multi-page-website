import { NavLink } from "react-router-dom";
import destination_api from "../../../api/Destination_api";

const DestinationTabs = () => {
  console.log(destination_api);
  return (
    <div className="w-100 ms-5 ">
      <ul class="nav">
        {destination_api.map((val) => {
          return (
            <li class="nav-item">
              <NavLink to={`/destination/${val.url}`}>
                <span className="nav-link">{val.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DestinationTabs;
