import "./header.css";
import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import Navbar from "./navbar/Navbar";
import Line from "./Line";

const Header = () => {
  return (
    <>
      <section className="header">
        <nav className="navbar navbar-dark navbar-expand-lg ">
          <div className="header-container">
            <div className="row">
              <Logo />
              <Line/>
              <Navbar />
            </div>
          </div>
        </nav>
      </section>
      <Outlet />
    </>
  );
};

export default Header;
