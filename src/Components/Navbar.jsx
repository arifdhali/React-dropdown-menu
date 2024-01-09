import MenuItems from "./MenuItems";
import MenuData from "../MenuData";

// css
import "./Navbar.css";

import Logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="nav-area">
      <a href="/" className="logo">
        <img src={Logo} alt="Logo" />
      </a>

      <ul className="nav-items" role="navigation">
        {MenuData.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
