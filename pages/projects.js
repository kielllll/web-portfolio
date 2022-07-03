import { useContext } from 'react'
import Head from 'next/head'
import Project from '../components/Project'
import Typography from '@material-ui/core/Typography'
import styles from '../styles/Projects.module.css'
import GlobalAppState from '../contexts/GlobalAppState'

export default function Projects() {
  const featuredProjects = [
    {
      name: 'Digital Knowmad',
      description:
        'A capstone project during my web development bootcamp with Zuitt.',
      image: '/images/none.jpg',
      url: 'https://gitlab.com/tuitt/students/batch95/ezekiel-tarranza/csp2/app-client',
      website: 'https://zeke-csp2-app-client.glitch.me/',
    },
    {
      name: 'Peformance Analysis: TOTP Algorithm',
      description: 'A research project during my final year in college.',
      image: '/images/none.jpg',
      url: 'https://github.com/kielllll/thesis-ui',
      website: 'https://thesis-totp.herokuapp.com/',
    },
    {
      name: 'Web Portfolio',
      description:
        "My own web portfolio. Inspired by Benjanmin Carlson's Profile",
      image: '/images/none.jpg',
      url: 'https://github.com/kielllll/web-portfolio',
      website: 'https://zeke-portfolio.vercel.app/',
    },
  ]

  const {
    state: { repos },
  } = useContext(GlobalAppState)

  return (
    <div>
      <Head>
        <title>Projects | Ezekiel Tarranza</title>
      </Head>

      <section>
        <Typography component="h1" variant="h2">
          Projects
        </Typography>
        <Typography component="h4" variant="subtitle1">
          I have worked on many projects between school, work, and personal
          stuff. Some of it are not deployed though ;)
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
          All Projects
        </Typography>
        {repos &&
          repos
            .filter(({ isPrivate, website }) => !isPrivate || website)
            .map((repo, i) => (
              <div key={i} className={styles.child}>
                <Project project={repo} />
              </div>
            ))}
      </section>
      <hr />
    </div>
  )
}
