import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
