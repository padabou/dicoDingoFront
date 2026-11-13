import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
      outputFileTracingIncludes: {
          '/*': ['./node_modules/@swc/helpers/**/*'],
      },
  },
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,

  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "equidico.fr",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.equidico.fr",
        port: "",
      },
    ],
  },

  typescript: {
    ignoreBuildErrors: process.env.VERCEL_ENV === "production",
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
    }
);
