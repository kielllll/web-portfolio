import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <AppBar color="transparent">
      <Toolbar>
        <div>
          <h1>
            <Link href="/">
              <a>Zeke</a>
            </Link>
          </h1>
        </div>
        <div className={styles.links}>
          <Link href="/">
            <a className={styles.link}>Home</a>
          </Link>
          <Link href="/about">
            <a className={styles.link}>About</a>
          </Link>
          <Link href="/projects">
            <a className={styles.link}>Projects</a>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
