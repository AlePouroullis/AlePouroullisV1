import utilStyles from "../styles/util.module.css";
import Image from "next/image";
import projectData from "../public/projectData.js";

function ProjectCard({ projectTitle, projectSubTitle, projectLink, src, alt }) {
  return (
    <a
      className="card-link"
      href={projectLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={`project-card + ${utilStyles.card}`}>
        <div className="project-image-container">
          <Image
            className="project-image"
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="project-info">
          <h2 className="project-title">{projectTitle}</h2>
          <h3 className="project-sub-title">{projectSubTitle}</h3>
        </div>
      </div>
    </a>
  );
}

export async function getStaticProps() {
  return {
    props: {projects: projectData}
  }
}

export default function ProjectsPage({ projects }) {
  return (
    <div className={`${utilStyles.container} + ${utilStyles["float-in"]}`}>
      <h1>Projects</h1>
      <p>
        Over the course of the last year, I&apos;ve worked on a variety of
        programming projects, mostly within the domain of artificial
        intelligence. Here are some of the ones I&apos;ve worked on and that
        I&apos;ve made open for viewing.
      </p>
      <ul className="project-list">
        {projects.map((project) => (
          <ProjectCard
            key={project.projectTitle}
            src={project.src}
            alt={project.alt}
            projectLink={project.projectLink}
            projectSubTitle={project.projectSubTitle}
            projectTitle={project.projectTitle}
          />
        ))}
      </ul>
    </div>
  );
}
