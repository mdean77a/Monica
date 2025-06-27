/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // In development, proxy to local backend
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:8000/api/:path*',
        },
      ];
    }
    
    // For local production testing (npm start), also proxy to local backend
    // This won't affect Vercel deployment as Vercel uses its own routing
    if (!process.env.VERCEL) {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:8000/api/:path*',
        },
      ];
    }
    
    // On Vercel, let vercel.json handle the routing
    return [];
  },
};

module.exports = nextConfig;
