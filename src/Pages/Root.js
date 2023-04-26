import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import classes from "./Root.module.css";

const Root = () => {
  return (
    <>
      <NavBar />
      <div className={classes.page}>
        <Outlet />
      </div>
    </>
  );
};
export default Root;
