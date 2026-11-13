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
    // SVG via /_next/image expands RCE surface (librsvg); serve .svg statically instead
    dangerouslyAllowSVG: false,
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
      // No tunnelRoute: avoids Sentry middleware-skip gap (GHSA-mchm-gjx6-7h55)
    }
);
