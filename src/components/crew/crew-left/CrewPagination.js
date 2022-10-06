import { NavLink } from "react-router-dom";
import chew_api from "../../../api/Chew_api";

const CrewPagination = () => {

  return (
    <div className="pagination">
      {chew_api.map(val=>{
        return <NavLink to={"/crew/"+val.url} className={({isActive})=>(isActive?'pagination-active':'')+' pagination-item'}></NavLink>
      })}
          </div>
  );
};

export default CrewPagination;
