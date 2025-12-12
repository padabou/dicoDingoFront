import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  swcMinify: true,

  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      {
        protocol: "https",
        hostname: "equidico.fr",
        port: "",
      },
    ],
  },

  typescript: {
    ignoreBuildErrors: process.env.VERCEL_ENV === "production",
  },

  eslint: {
    ignoreDuringBuilds: process.env.VERCEL_ENV === "production",
  },

  env: {
    BASE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
};

export default withSentryConfig(
    nextConfig,
    {
      org: "dicodingo",
      project: "equidico-frontend",
      silent: !process.env.CI,
      widenClientFileUpload: true,
      tunnelRoute: "/monitoring",
      disableLogger: true,
      automaticVercelMonitors: true,
    }
);
