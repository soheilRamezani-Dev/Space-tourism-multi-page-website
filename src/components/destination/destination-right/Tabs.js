import { NavLink } from "react-router-dom";
import destination_api from "../../../api/Destination_api";

const DestinationTabs = () => {
  return (
    <div className="w-100 ms-5 ">
      <ul className="nav">
        {destination_api.map((val,key) => {
          return (
            <li key ={key} className="nav-item">
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
