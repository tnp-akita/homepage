/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "nicovideo.cdn.nimg.jp" },
      { protocol: "https", hostname: "media.discordapp.net" },
    ],
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
