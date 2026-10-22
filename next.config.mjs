/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["nicovideo.cdn.nimg.jp", "media.discordapp.net"],
  },
  async rewrites() {
    return [
      {
        source: "/posts/:slug/images/:path*",
        destination: "/api/posts/:slug/images/:path*",
      },
    ];
  },
};

export default nextConfig;
