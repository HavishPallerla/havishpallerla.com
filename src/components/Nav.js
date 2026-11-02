import Link from 'next/link';

export function Nav() {
  return (
    <nav className="nav" aria-label="Sections">
      <Link href="/#current">currently</Link><span aria-hidden="true">/</span>
      <Link href="/#work">work</Link><span aria-hidden="true">/</span>
      <Link href="/#projects">projects</Link><span aria-hidden="true">/</span>
      <Link href="/#contact">contact</Link>
    </nav>
  );
}
