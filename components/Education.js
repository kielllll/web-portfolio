import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/Education.module.css";

const Education = ({ school }) => {
  const { name, duration, course, description } = school;

  return (
    <Card className={styles.root}>
      <CardContent className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles["header-child-left"]}>
            <Typography component="h5" variant="h5">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="textPrimary">
              {course}
            </Typography>
          </div>
          <div className={styles["header-child-right"]}>
            <Typography variant="subtitle1" color="textPrimary">
              {duration}
            </Typography>
          </div>
        </div>
        {/* Body */}
        <div>
          <Typography variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default Education;
