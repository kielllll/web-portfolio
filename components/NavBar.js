import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import Toolbar from "@material-ui/core/Toolbar";
import styles from "../styles/NavBar.module.css";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const NavBar = () => {
  return (
    <HideOnScroll>
      <AppBar color="default">
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
            <Link href="/gear">
              <a className={styles.link}>Gear</a>
            </Link>
            <Link href="/projects">
              <a className={styles.link}>Projects</a>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default NavBar;
