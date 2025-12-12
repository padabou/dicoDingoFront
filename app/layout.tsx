import "@/styles/prism.css";
import "@/styles/tailwind.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});
export const dynamic = "force-dynamic";
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
      <html
          lang="fr"
          suppressHydrationWarning
          className={cx(
              inter.variable,
              lora.variable,
              // IMPORTANT : les styles de thème doivent être ici
              "bg-white text-gray-800 dark:bg-black dark:text-gray-400"
          )}
      >
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
