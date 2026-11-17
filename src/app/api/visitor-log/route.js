import { NextResponse } from 'next/server';

function isSameOrigin(request) {
  const origin = request.headers.get('origin');
  return origin && origin === new URL(request.url).origin;
}

function decodeLocation(value) {
  if (!value) return null;
  try {
    return decodeURIComponent(value).slice(0, 100);
  } catch {
    return value.slice(0, 100);
  }
}

export async function POST(request) {
  if (!isSameOrigin(request)) return new NextResponse(null, { status: 403 });
  if (process.env.VERCEL !== '1') return new NextResponse(null, { status: 204 });

  const city = decodeLocation(request.headers.get('x-vercel-ip-city'));
  const region = decodeLocation(request.headers.get('x-vercel-ip-country-region'));
  if (city || region) console.log(JSON.stringify({ event: 'visitor_location', city, region }));

  return new NextResponse(null, { status: 204 });
}
