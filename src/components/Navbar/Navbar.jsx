import { Link } from "react-router-dom";
import NavBarLink from "./NavBarLink";
import Logo from "../../assets/favicons/favicon.ico";
import { Menu } from "../../assets/icons";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="NavBar">
      <div className="NavBarLogoContainer">
        <Link to="/">
          <img src={Logo} alt="logo" title="Home" />
        </Link>
      </div>
      <label htmlFor="NavCheckBox" className="NavCheckBoxLabel">
        <img src={Menu} alt="menu" />
      </label>
      <input
        type="checkbox"
        name="NavCheckBox"
        id="NavCheckBox"
      />
      <ul className="NavBarMain">
        <NavBarLink location="/about" title="About Me" />
        <NavBarLink location="/tools" title="Tools I use" />
        <NavBarLink location="/projects" title="Projects" />
        <NavBarLink location="/contact" title="Contact" />
      </ul>
    </nav>
  );
}

export default Navbar;
