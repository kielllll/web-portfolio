import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/Project.module.css";

const Project = ({ project }) => {
  const { name, description, repoLink, productionLink, image, tags } = project;
  console.log(repoLink);
  return (
    <Card className={styles.root}>
      <CardMedia
        className={styles["project-image"]}
        image="./images/none.png"
        title={name}
      />
      <CardContent>
        <a href={repoLink} target="_blank">
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
        </a>
        <Typography variant="subtitle1" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Project;
