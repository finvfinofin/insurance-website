/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: 'export',
    // Change build directory (optional)
    distDir: 'dist', // changes .next folder location

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "dev-blog.jumpp.finance",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "blog.jumpp.finance",
        port: "",
        pathname: "/**",
      },
    ],
  },

};

export default nextConfig;
