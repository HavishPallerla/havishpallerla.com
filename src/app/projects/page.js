'use client';

import { Inter } from 'next/font/google';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '../../components/useTheme';
import { Header, ThemeToggle } from '../../components/Header';

const inter = Inter({ subsets: ['latin'] });

const projects = [
  {
    title: 'Stock App',
    description: 'A stock tracking application with real-time data and interactive visualizations.',
    href: 'https://github.com/HavishPallerla/stock-app'
  },
  {
    title: 'Lyric App',
    description: 'An app for discovering and displaying song lyrics with search and filtering capabilities.',
    href: 'https://github.com/HavishPallerla/lyric-app'
  },
  {
    title: 'Fleet Route Optimization Engine',
    description: 'Multi-vehicle routing engine with live rerouting and a React and Mapbox interface visualizing routes and task queues.',
  },
  {
    title: 'Smart Email Triage System',
    description: 'Intelligent NLP-powered email classification and routing for customer support.',
  },
  {
    title: "Arcode",
    description: 'A gamified coding platform combining arcade-style challenges with progress tracking.',
  },
  {
    title: "VoiceBiometric Auth",
    description: 'Voice biometric fraud detection integrated into Salesforce and Pindrop APIs.',
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: i * 0.06 },
  }),
};

function handlePointerMove(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
}

export default function ProjectsPage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={`site-root ${inter.className}`}>
      <Header
        title="Projects"
        subtitle="A curated selection of projects that reflect my passions and interests."
        nav={
          <>
            <Link href="/" className="hover:opacity-70 transition-opacity" aria-label="Home">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </>
        }
      />

      <main className="resume-container z-30">
        <div className="project-grid">
          {projects.map((p, i) => {
            const Card = p.href ? motion.a : motion.div;
            return (
              <Card
                key={i}
                href={p.href}
                target={p.href ? '_blank' : undefined}
                rel={p.href ? 'noopener noreferrer' : undefined}
                className="project-card"
                onMouseMove={handlePointerMove}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={cardVariants}
              >
                <div className="project-card-title">
                  {p.title}
                  {p.href ? (
                    <svg
                      className="project-card-arrow h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  ) : null}
                </div>
                <div className="project-card-desc">{p.description}</div>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
