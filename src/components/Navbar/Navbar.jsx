import NavBarLink from "./NavBarLink";
import "./navbar.css";
import Logo from "../../assets/favicons/favicon.ico";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="NavBar">
      <div className="NavBarLogoContainer">
        <Link to="/">
          <img src={Logo} alt="logo" title="Home" />
        </Link>
      </div>
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
