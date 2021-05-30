import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/Project.module.css";

const Project = ({ project }) => {
  const { name, description, repoLink, productionLink, image, tags } = project;

  return (
    <Card className={styles.root}>
      <div className={styles["sub-root"]}>
        <CardContent>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a href={repoLink} target="_blank">
              Repository
            </a>
          </Button>
          {productionLink ? (
            <Button size="small">
              <a href={productionLink} target="_blank">
                Live
              </a>
            </Button>
          ) : (
            ""
          )}
        </CardActions>
      </div>
    </Card>
  );
};

export default Project;
