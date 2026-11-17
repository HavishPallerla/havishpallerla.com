'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname || pathname.startsWith('/api/')) return;

    fetch('/api/visitor-log', { method: 'POST', keepalive: true }).catch(() => {});
  }, [pathname]);

  return null;
}
