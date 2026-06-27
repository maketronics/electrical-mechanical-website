/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   async rewrites() {
    return [
      {
        source: '/industries',
        destination: '/industries-served',
      },
       {
        source: '/approach',
        destination: '/execution-support',
      },
    ];
  },
  
};

export default nextConfig;
