import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBarLink({ location, title }) {
  return (
    <li>
      <NavLink
        to={location}
        className={({ isActive }) =>
          isActive ? "NavBarLink NavBarActiveLink" : "NavBarLink"
        }
      >
        <p>{title}</p>
      </NavLink>
    </li>
  );
}

export default NavBarLink;
