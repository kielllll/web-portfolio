import Head from "next/head";
import Project from "../components/Project";
import Typography from "@material-ui/core/Typography";
import styles from "../styles/Projects.module.css";

export default function Projects() {
  const featuredProjects = [
    {
      name: "Digital Knowmad",
      description:
        "A capstone project during my web development bootcamp with Zuitt.",
      image: "/images/none.jpg",
      repoLink:
        "https://gitlab.com/tuitt/students/batch95/ezekiel-tarranza/csp2/app-client",
      productionLink: "https://zeke-csp2-app-client.glitch.me/",
      tags: ["html", "css", "javascript"],
    },
    {
      name: "Budget Wiser",
      description:
        "A capstone project during my web development bootcamp with Zuitt.",
      image: "/images/none.jpg",
      repoLink: "https://gitlab.com/kielllll/csp3-client",
      productionLink: "https://csp3-client-iota.vercel.app/",
      tags: ["next.js", "html", "css", "vercel"],
    },
    {
      name: "Peformance Analysis: TOTP Algorithm",
      description: "A research project during my final year in college.",
      image: "/images/none.jpg",
      repoLink: "https://github.com/kielllll/thesis-ui",
      productionLink: "https://thesis-totp.herokuapp.com/",
      tags: ["nuxt.js", "html", "css", "heroku"],
    },
    {
      name: "Web Portfolio",
      description:
        "My own web portfolio. Inspired by Benjanmin Carlson's Profile",
      image: "/images/none.jpg",
      repoLink: "https://github.com/kielllll/web-portfolio",
      productionLink: "https://zeke-portfolio.vercel.app/",
      tags: ["next.js", "html", "css", "vercel"],
    },
  ];

  const projects = [
    {
      name: "Portfolio",
      description: "A portfolio made with only vanilla js, html, and css",
      image: "/images/none.jpg",
      repoLink: "https://github.com/kielllll/portfolio",
      productionLink: "https://kielllll.gitlab.io/csp1/",
      tags: ["html", "css", "javascript"],
    },
    {
      name: "Math-Game",
      description: "A mobile application game that has arithmetic questions",
      image: "/images/none.jpg",
      repoLink: "https://github.com/kielllll/Math-Game",
      productionLink: "",
      tags: ["java", "android"],
    },
    {
      name: "GWMS_Frontend",
      description: "A project requirement for Software Engineering (Frontend)",
      image: "/images/none.jpg",
      repoLink: "https://github.com/kielllll/GWMS_Frontend",
      productionLink: "",
      tags: ["vue.js", "html", "css"],
    },
    {
      name: "GWMS_backend",
      description: "A project requirement for Software Engineering (Backend)",
      image: "/images/none.jpg",
      repoLink: "https://github.com/kielllll/GWMS_backend",
      productionLink: "",
      tags: ["PHP", "Laravel"],
    },
    {
      name: "Skills Clinic - Inventory Module",
      description: "A project requirement for Web Development",
      image: "/images/none.jpg",
      repoLink: "https://github.com/kielllll/SkillsClinic-InventoryModule",
      productionLink: "",
      tags: ["PHP", "Laravel"],
    },
    {
      name: "Numerical-Analysis",
      description: "A final requirement for Numerical Analysis",
      image: "/images/none.jpg",
      repoLink: "https://github.com/kielllll/Numerical-Analysis",
      productionLink: "",
      tags: ["Java", "JavaFX"],
    },
    {
      name: "ThreeSeven",
      description: "A project for System Analysis and Design",
      image: "/images/none.jpg",
      repoLink: "https://github.com/kielllll/ThreeSeven",
      productionLink: "",
      tags: ["Java", "JavaFX"],
    },
    {
      name: "OOP",
      description:
        "An Inventory Management project for Object Oriented Programming",
      image: "/images/none.jpg",
      repoLink: "https://github.com/kielllll/OOP",
      productionLink: "",
      tags: ["Java"],
    },
  ];

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
        {projects.map((project, e) => (
          <div key={e} className={styles.child}>
            <Project project={project} />
          </div>
        ))}
      </section>
      <hr />
    </div>
  );
}
