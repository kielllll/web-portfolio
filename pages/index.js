import Head from 'next/head'
import Project from '../components/Project'
import Experience from '../components/Experience'
import Education from '../components/Education'
import styles from '../styles/Home.module.css'
import Typography from '@material-ui/core/Typography'
import { featuredProjects, experiences, education } from '../data/data'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Ezekiel Tarranza</title>
      </Head>

      <section>
        <Typography component="h1" variant="h2">
          Zeke
        </Typography>
        <Typography component="h4" variant="subtitle1">
          Hi there! I'm Ezekiel Tarranza, a Full-Stack Developer,
          tech-enthusiast, and a potato!
        </Typography>
        <Typography component="h4" variant="subtitle1">
          I’m a type of person that is a team-player, where everyone’s idea is
          very important in solving a problem. I heavily rely on documentation
          of a certain technology to check the feasibility whether it can give
          value or improve the experience. I’m also a very open person who
          accepts feedback as opportunities to grow.
        </Typography>
        <hr />
      </section>

      <section>
        <Typography component="h3" variant="h3">
          Featured Projects
        </Typography>
        {featuredProjects.map((featuredProject, e) => (
          <div key={e} className={styles.child}>
            <Project project={featuredProject} />
          </div>
        ))}
        <hr />
      </section>

      <section>
        <Typography component="h3" variant="h3">
          Experience
        </Typography>
        {experiences.map((experience, e) => (
          <div key={e} className={styles.child}>
            <Experience experience={experience} />
          </div>
        ))}
        <hr />
      </section>

      <section>
        <Typography component="h3" variant="h3">
          Education
        </Typography>
        {education.map((school, e) => (
          <div key={e} className={styles.child}>
            <Education school={school} />
          </div>
        ))}
        <hr />
      </section>

      <section>
        <Typography component="h3" variant="h3">
          Tech Stack
        </Typography>
        <Typography component="h4" variant="subtitle1">
          Currently I'm focusing on MERN stack.
        </Typography>
        <div className={styles.icons}>
          <i className={`devicon-git-plain colored ${styles.icon}`}></i>
          <i className={`devicon-mongodb-plain colored ${styles.icon}`}></i>
          <i className={`devicon-express-original colored ${styles.icon}`}></i>
          <i className={`devicon-react-original colored ${styles.icon}`}></i>
          <i className={`devicon-nodejs-plain colored ${styles.icon}`}></i>
          <i className={`devicon-javascript-plain colored ${styles.icon}`}></i>
          <i className={`devicon-html5-plain colored ${styles.icon}`}></i>
          <i className={`devicon-css3-plain colored ${styles.icon}`}></i>
          <i className={`devicon-php-plain colored ${styles.icon}`}></i>
        </div>
        <hr />
      </section>
    </div>
  )
}
