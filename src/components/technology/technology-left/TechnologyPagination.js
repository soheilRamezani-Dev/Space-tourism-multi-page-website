import { NavLink } from "react-router-dom";

const TechnologyPagination = () => {
  return (
    <div className="col-2 d-flex flex-column">
      <NavLink to="/technology/launch-vehicle" className={({isActive})=>(isActive?"technology-pagination-active":"")+" technology-pagination"}>
        1
      </NavLink>
      <NavLink to="/technology/spaceport" className={({isActive})=>(isActive?"technology-pagination-active":"")+" technology-pagination"}>2</NavLink>
      <NavLink to="/technology/soac-capsule" className={({isActive})=>(isActive?"technology-pagination-active":"")+" technology-pagination"}>3</NavLink>
    </div>
  );
};

export default TechnologyPagination;
