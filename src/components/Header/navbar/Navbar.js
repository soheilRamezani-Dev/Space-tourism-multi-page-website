import NavItems from "../../../api/Nav_items_api";
import NavItem from "./NavItem";

const Navbar = () => {

  return (
    <>
      <div className="d-block d-md-none col-10 d-flex flex-row-reverse">
        <button class="navbar-toggler" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="navbar-items col-lg-7 col-md-10 d-flex justify-content-center d-none d-md-block">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          {NavItems.map((val,key)=>{
            return <NavItem val ={val} key={key} id={key}/>
          })}
          
          
        </ul>
      </div>
    </>
  );
};

export default Navbar;
