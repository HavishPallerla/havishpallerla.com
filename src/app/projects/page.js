import Link from 'next/link';
import { Nav } from '../../components/Nav';
import { ProjectList } from '../../components/ProjectList';

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <main className="page projects-page">
        <header className="intro"><h1>Projects</h1><p>A few things I&apos;ve built.</p></header>
        <ProjectList headingLevel={2} />
        <p className="back-link"><Link href="/">← Havish Pallerla</Link></p>
      </main>
    </>
  );
}
