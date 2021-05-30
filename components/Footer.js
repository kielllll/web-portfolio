import styles from "../styles/Footer.module.css";
import Typography from "@material-ui/core/Typography";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/kielllll" target="_blank">
        <i className={`devicon-github-original colored icon ${styles.icon}`} />
      </a>
      <a href="https://gitlab.com/kielllll" target="_blank">
        <i className={`devicon-gitlab-plain colored icon ${styles.icon}`} />
      </a>
      <a
        href="https://www.linkedin.com/in/ezekiel-tarranza-087221180"
        target="_blank"
      >
        <i className={`devicon-linkedin-plain colored icon ${styles.icon}`} />
      </a>
      <Typography component="p" variant="subtitle2">
        Copyright &copy; 2021 by Ezekiel Tarranza
      </Typography>
    </footer>
  );
};

export default Footer;
