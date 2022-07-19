import utilStyles from '../styles/util.module.css';
import projectData from '../public/projects.json' assert {type: "json"};
import Image from 'next/image';

function ProjectCard({ projectTitle, src, alt}) {
  return (
    <div className={`project-card + ${utilStyles.card}`}>
      <div className="project-image-container">
        <Image className="project-image" src={src} alt={alt} layout='fill' objectFit="cover"/>
      </div>
      <div className="project-info">
        <p>{projectTitle}</p>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <div className={utilStyles.container}>
      <h1>Projects</h1>
      <p>Over the course of the last year, I&apos;ve worked on a variety of programming projects, mostly within the domain of artificial intelligence. Here are some of the ones I&apos;ve worked on and that I&apos;ve made open for viewing.</p>
      <ul className="project-list">
        {projectData.projects.map(project => 
          <ProjectCard key={project.projectTitle} src={project.src}
            alt={project.alt} projectTitle={project.projectTitle}
          />
        )}
      </ul>
    </div>
  )
}