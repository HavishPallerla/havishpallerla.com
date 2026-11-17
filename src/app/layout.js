import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { VisitorTracker } from '../components/VisitorTracker';

export const metadata = {
  title: 'Havish',
  description: 'Havish Pallerla is a computer science student at the University of Michigan who builds useful software across the stack.',
  metadataBase: new URL('https://havishpallerla.com'),
  openGraph: {
    title: 'Havish Pallerla — Software Engineer',
    description: 'Software engineering and projects by Havish Pallerla.',
    url: 'https://havishpallerla.com',
    siteName: 'Havish Pallerla',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <footer className="privacy-note">
          This site logs approximate city and region inferred from your IP address. It does not log your IP address or collect precise GPS location.
        </footer>
        <VisitorTracker />
        <Analytics />
      </body>
    </html>
  );
}
