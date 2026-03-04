import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // ── STATIC EXPORT (for MilesWeb shared hosting / cPanel public_html) ──
  // Comment out the line below if using the Node.js App option instead.
  output: 'export',

  // Required for static export: disables Next.js image optimization
  // (images are served as-is, still load fine from external URLs)
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'sspark.genspark.ai',
      },
      {
        protocol: 'https',
        hostname: 'www.genspark.ai',
      },
    ],
  },
};

export default nextConfig;
