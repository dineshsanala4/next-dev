import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";
import Home from "../../home/Home";

function Layout(props: any) {
  return (
    <div>
      <div>
        <MainNavigation />
      </div>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
