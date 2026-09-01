'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from '../components/useTheme';
import { Header, ThemeToggle } from '../components/Header';

const inter = Inter({ subsets: ['latin'] });

const ROLES = [
  {
    title: 'Software Engineering Internship',
    company: 'Gemini',
    dates: 'May 2026 — August 2026',
    desc: 'Predictions, Summer 2026',
  },
  {
    title: 'Software Engineering Internship',
    company: 'Humana',
    dates: 'May 2025 — December 2025',
    desc: 'Enterprise Search, Summer & Fall 2025',
  },
  {
    title: 'Software Engineering Fellowship',
    company: 'NASA',
    dates: 'January 2025 — May 2025',
    desc: 'Python spacecraft reliability simulations and automated testing pipelines for mission validation.',
    href: 'https://drive.google.com/file/u/4/d/1yvst4PU2PZ5v0HYt2fmTO4s8bDm6zclV/view?usp=sharing',
  },
  {
    title: 'Software Research',
    company: 'University of Michigan',
    dates: 'September 2024 — March 2025',
    desc: 'The Future of Programming Lab (Project Hazel); advised by Dr. Cyrus Omar',
  },
  {
    title: 'Software Engineering Fellowship',
    company: 'Google',
    dates: 'April 2025 — September 2024',
    desc: 'Google\'s Code Next',
  },
  {
    title: 'Founder & Lead Software Engineer',
    company: 'Oakland IT Services',
    dates: 'September 2021 — August 2024',
    desc: 'I started this with my dad :)',
  },
];

const EDUCATION = [
  {
    school: 'University of Michigan — Ann Arbor',
    degree: 'B.S. in Computer Science',
    dates: 'May 2028',
  },
];

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: i * 0.05 },
  }),
};

export default function Home() {
  const { isDark, toggleTheme } = useTheme();

  const social = [
    { href: 'https://github.com/havishpallerla', alt: 'github' },
    { href: 'https://linkedin.com/in/havishpallerla', alt: 'linkedin' },
    { href: 'https://discord.com/users/248496824506253322', alt: 'discord' },
    { href: 'mailto:pallerla@umich.edu', alt: 'email' },
    { href: 'https://twitter.com/havishpallerla', alt: 'x-twitter' },
  ];

  return (
    <div className={`site-root ${inter.className}`}>
      <Header
        title="Havish Pallerla"
        nav={
          <>
            <div className="flex gap-6">
              <Link href="/projects" className="nav-link hover:opacity-90">
                Projects
              </Link>
            </div>
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </>
        }
      />

      <main className="resume-container z-30">
        <section className="timeline">
          {EDUCATION.map((e, i) => (
            <motion.div
              key={i}
              className="timeline-row"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={rowVariants}
            >
              <div>
                <div className="role-title">{e.school}</div>
                <div className="role-desc">{e.degree}</div>
              </div>
              <div className="role-dates">{e.dates}</div>
            </motion.div>
          ))}

          <div className="education-sep" aria-hidden />
        </section>

        <section className="timeline">
          {ROLES.map((r, idx) => {
            const content = (
              <>
                <div className="role-left">
                  <div className="role-title">
                    {r.title} <span className="role-company">{r.company}</span>
                  </div>
                  <div className="role-desc">{r.desc}</div>
                </div>
                <div className="role-dates">{r.dates}</div>
              </>
            );

            return r.href ? (
              <motion.a
                key={idx}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="timeline-row"
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={rowVariants}
              >
                {content}
              </motion.a>
            ) : (
              <motion.div
                key={idx}
                className="timeline-row"
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={rowVariants}
              >
                {content}
              </motion.div>
            );
          })}
        </section>

        <div className="links-row">
          <div className="links-left flex items-center">
            {social.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer">
                <Image className="social-icon" src={isDark ? `/icons/${s.alt}-dark.svg` : `/icons/${s.alt}.svg`} alt={s.alt} width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
