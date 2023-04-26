import { Link } from "react-router-dom";
import logo from "../Images/logo.jpg";

import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes["logo-and-links"]}>
        <img src={logo} alt="" />
        <div className={classes.links}>
          <Link to="/">Home</Link>
          <Link to="profile">Profile</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
