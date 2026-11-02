import { projects } from '../data/projects';

function ProjectIcon({ type }) {
  return (
    <svg className="project-icon" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {type === 'music' && <><path d="M16 28V11l16-4v17M16 17l16-4" /><ellipse cx="11" cy="29" rx="5" ry="4" /><ellipse cx="27" cy="25" rx="5" ry="4" /></>}
      {type === 'route' && <><circle cx="9" cy="10" r="4" /><circle cx="31" cy="30" r="4" /><path d="M13 10h12a7 7 0 0 1 0 14H15a6 6 0 0 0 0 12h7M9 17v8" /><path d="m19 33 3 3-3 3" /></>}
      {type === 'chart' && <><path d="M5 7v27h30M12 27v-7M21 27V14M30 27V8" /><path d="m10 12 10-5 8-2" /></>}
    </svg>
  );
}

export function ProjectList({ headingLevel = 3 }) {
  const Heading = `h${headingLevel}`;
  return (
    <div className="project-list">
      {projects.map((project) => (
        <article className="project-entry" key={project.href}>
          <ProjectIcon type={project.icon} />
          <div className="project-copy">
            <Heading><a href={project.href} target="_blank" rel="noreferrer">{project.title}<span className="project-arrow" aria-hidden="true">→</span></a></Heading>
            <p>{project.description}</p>
            <p className="tools">{project.tools}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
