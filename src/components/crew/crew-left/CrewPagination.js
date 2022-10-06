import { NavLink } from "react-router-dom";

const CrewPagination = () => {
  return (
    <div className="pagination">
      <NavLink to="/crew/douglas-hurley" className={({isActive})=>(isActive?'pagination-active':'')+' pagination-item'}></NavLink>
      <NavLink to="/crew/mark-shuttleworth" className={({isActive})=>(isActive?'pagination-active':'')+' pagination-item'}></NavLink>
      <NavLink to="/crew/victor-glover" className={({isActive})=>(isActive?'pagination-active':'')+' pagination-item'}></NavLink>
      <NavLink to="/crew/anousheh-ansari" className={({isActive})=>(isActive?'pagination-active':'')+' pagination-item'}></NavLink>
    </div>
  );
};

export default CrewPagination;
