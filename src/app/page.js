import { Nav } from '../components/Nav';
import { ProjectList } from '../components/ProjectList';

export default function Home() {
  return (
    <>
      <Nav />
      <main className="page">
        <header className="intro" id="top">
          <h1>Havish Pallerla</h1>
          <p>Computer Science @ University of Michigan. I build apps and the systems behind them.</p>
          <div className="social-links" aria-label="Elsewhere">
            <a href="https://github.com/HavishPallerla" target="_blank" rel="noreferrer">GitHub</a>
            <span aria-hidden="true">·</span>
            <a href="https://www.linkedin.com/in/havishpallerla/" target="_blank" rel="noreferrer">LinkedIn</a>
            <span aria-hidden="true">·</span>
            <a href="mailto:pallerla@umich.edu">Email</a>
          </div>
        </header>

        <section className="section" id="current">
          <h2>currently</h2>
          <p>I&apos;m interested in building software people use every day, from the applications they interact with to the systems behind them.</p>
          <p>I&apos;d like to work across back-end engineering, data systems, infrastructure, and applied machine learning.</p>
        </section>

        <section className="section" id="work">
          <h2>work</h2>
          <div className="work-list">
            <article className="work-entry">
              <div className="entry-heading"><h3>Software Engineering Intern</h3><p className="date">May 2026 – Aug 2026</p></div>
              <p className="company">Gemini</p>
              <p>Predictions</p>
            </article>
            <article className="work-entry">
              <div className="entry-heading"><h3>Software Engineering Intern</h3><p className="date">May 2025 – Dec 2025</p></div>
              <p className="company">Humana</p>
              <p>Enterprise Search</p>
            </article>
          </div>
        </section>

        <section className="section" id="projects">
          <h2>projects</h2>
          <ProjectList />
        </section>

        <section className="section contact-section" id="contact">
          <h2>contact</h2>
          <dl className="contact-list">
            <div><dt>email</dt><dd><a href="mailto:pallerla@umich.edu">pallerla@umich.edu</a></dd></div>
            <div><dt>github</dt><dd><a href="https://github.com/HavishPallerla" target="_blank" rel="noreferrer">havishpallerla</a></dd></div>
            <div><dt>linkedin</dt><dd><a href="https://www.linkedin.com/in/havishpallerla/" target="_blank" rel="noreferrer">havishpallerla</a></dd></div>
          </dl>
        </section>
      </main>
    </>
  );
}
