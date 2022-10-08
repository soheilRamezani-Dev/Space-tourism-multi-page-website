import NavItems from "../../../api/Nav_items_api";
import NavItem from "./NavItem";
import { useState } from "react";

const Navbar = () => {
  const [navToggle,setNavToggle] = useState(false);
  return (
    <>
      <div className="d-block d-md-none col-10 d-flex flex-row-reverse">
        <button onClick={()=>setNavToggle(!navToggle)} className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className={`navbar-items col-lg-7 col-md-10 d-flex justify-content-center ${navToggle?'toggle-open':'toggle-close'}`}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {NavItems.map((val,key)=>{
            return <NavItem val ={val} key={key} id={key} setNavToggle={setNavToggle}/>
          })}
          
          
        </ul>
      </div>
    </>
  );
};

export default Navbar;
