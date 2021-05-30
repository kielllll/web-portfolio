import Head from "next/head";
import Project from "../components/Project";
import Experience from "../components/Experience";
import Education from "../components/Education";
import styles from "../styles/Home.module.css";
import Typography from "@material-ui/core/Typography";

export default function Home() {
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
      productionLink: "https://csp3-client-je4pi3m7s-kielllll.vercel.app/",
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
      productionLink: "https://csp3-client-iota.vercel.app/",
      tags: ["next.js", "html", "css", "vercel"],
    },
  ];

  const experiences = [
    {
      company: "Summit Digital",
      role: "Automations / Web Developer",
      duration: "March 2021 - Present",
      jobType: ["Part Time"],
      description:
        "Develop Lead Funnels and Automations through GoHighLevel CRM, LeadsHook, and Integration Platforms i.e Zapier, Pipedream.",
    },
    {
      company: "itGenius",
      role: "Software Engineer",
      duration: "August 2019 - Present",
      jobType: ["Full Time"],
      description:
        "Developing Web Applications, API Integrations, Automations, and Data Visualization using Google Data Studio",
    },
    {
      company: "Concentrix",
      role: "Technical Support Expert",
      duration: "June 2019 - August 2019",
      jobType: ["Full Time"],
      description: "Provide seamless solutions to the consumers.",
    },
    {
      company: "itGenius",
      role: "Software Engineer",
      duration: "October 2018 - February 2019",
      jobType: ["Intern"],
      description:
        "Assist on Senior Engineers on the Web Development and API integrations.",
    },
  ];

  const education = [
    {
      name: "Zuitt",
      duration: "February 2021 - June 2021",
      course: "Web Developer Bootcampee",
      description:
        "A web development bootcamp that uses the MERN stack. Has 3 capstone projects which really honed my skills.",
    },
    {
      name: "University of Mindanao",
      duration: "June 2016 - Present",
      course: "BS in Computer Science",
      description: "A lot of Mathematics, Theories, and Principles!",
    },
  ];

  return (
    <div>
      <Head>
        <title>Home | Ezekiel Tarranza</title>
      </Head>

      <section>
        <Typography component="h1" variant="h1">
          Zeke
        </Typography>
        <Typography component="h4" variant="subtitle1">
          Hi there! I'm Ezekiel Tarranza, a Full-Stack Developer,
          tech-enthusiast, and a potato!
        </Typography>
        <Typography component="h4" variant="subtitle1">
          I find developing things fun! I explore, get in awe, and learn how to
          do it. I do really love to work in groups as it is one of my forms of
          socializing, making me a very good team-player!
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
      </section>
    </div>
  );
}
