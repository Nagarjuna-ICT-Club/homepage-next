/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
      {
        protocol:"https",
        hostname:"ik.imagekit.io",
        port:""
      },
    {
      protocol:"https",
      hostname:"i0.wp.com",
      port:""
    }
    ],
  },
};

module.exports = nextConfig;
