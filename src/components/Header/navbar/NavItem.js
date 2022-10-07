import { NavLink } from "react-router-dom";

const NavItem = ({val, id}) => {
    console.log(id)
  const pad = (num) => {
    return num < 10 ? "0" + num.toString() : num.toString();
  };

  return (
    <li className="nav-item">
      <NavLink
        to={val.url}
        end
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <span className="nav-link">
          <span className="fw-bold">{pad(id)}</span>
          <span className="fw-light"> {val.title}</span>
        </span>
      </NavLink>
    </li>
  );
};
export default NavItem;
