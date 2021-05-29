import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/Experience.module.css";

const Experience = ({ experience }) => {
  const { company, role, duration, jobType, description } = experience;

  return (
    <Card className={styles.root}>
      <CardContent className={styles.content}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles["header-child-left"]}>
            <Typography component="h5" variant="h5">
              {company}
            </Typography>
            <Typography variant="subtitle1" color="textPrimary">
              {role}
            </Typography>
          </div>
          <div className={styles["header-child-right"]}>
            <Typography variant="subtitle1" color="textPrimary">
              {duration}
            </Typography>
            <Typography variant="subtitle1" color="textPrimary">
              {jobType}
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

export default Experience;
