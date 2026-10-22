/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "nicovideo.cdn.nimg.jp" },
      { protocol: "https", hostname: "media.discordapp.net" },
    ],
  },
};

export default nextConfig;
