import { NavLink } from "react-router-dom";
import technology_api from "../../../api/Technology_api";

const TechnologyPagination = () => {
  return (
    <div className="col-2 d-flex flex-column">
      {technology_api.map((val,key)=>{
        return  <NavLink key={key} to={"/technology/"+val.url} className={({isActive})=>(isActive?"technology-pagination-active":"")+" technology-pagination"}>
        {key+1}
      </NavLink>
      })}
    </div>
  );
};

export default TechnologyPagination;
