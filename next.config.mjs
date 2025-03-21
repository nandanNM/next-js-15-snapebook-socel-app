/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
    },
  },
  serverExternalPackages: ["@node-rs/argon2"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.NEXT_PUBLIC_UPLOADTHING_APP_ID}.ufs.sh`,
        pathname: `/f/*`,
      },
    ],
  },

  rewrites: () => {
    return [
      {
        source: "/hashtag/:tag",
        destination: "/search?q=%23:tag",
      },
    ];
  },
};

export default nextConfig;

// https://djbvfyq0mz.ufs.sh/a/djbvfyq0mz/3c262da6-eed3-4b41-bff1-a90f6d6a20ba-3cdm5.jpg
//https://djbvfyq0mz.ufs.sh/f/3c262da6-eed3-4b41-bff1-a90f6d6a20ba-3cdm5.jpg
// https://utfs.io/a/djbvfyq0mz/69167abb-59c0-474b-b87a-1b284e908a5b-1at6nk.jpg
