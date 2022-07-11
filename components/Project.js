import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import styles from '../styles/Project.module.css'

const Project = ({ project }) => {
  const {
    name,
    description,
    url: repoLink,
    website: productionLink,
    language,
    isPrivate,
  } = project

  return (
    <Card className={styles.root}>
      <div className={styles['sub-root']}>
        <CardContent>
          <Typography component="h5" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions className={styles['card-actions']}>
          {!isPrivate && (
            <a href={repoLink} target="_blank">
              <Button size="small">Repo</Button>
            </a>
          )}

          {!!productionLink && (
            <a href={productionLink} target="_blank">
              <Button size="small">Live</Button>
            </a>
          )}
        </CardActions>
      </div>
    </Card>
  )
}

export default Project
