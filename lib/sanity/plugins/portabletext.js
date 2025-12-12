"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import { urlForImage } from "@/lib/sanity/image";
import Iframe from "react-iframe";
import getVideoId from "get-video-id";
import { cx } from "@/utils/all";

// ----------------------------------------------
// 1. Refractor chargé dynamiquement côté client
// ----------------------------------------------
const Refractor = dynamic(
    () => import("react-refractor").then((m) => m.Refractor),
    { ssr: false }
);

// ----------------------------------------------
// 2. Lazy load des langages PRISM/Refractor
// ----------------------------------------------
const languages = [
  "javascript",
  "jsx",
  "markup",
  "css",
  "bash",
];

async function registerLanguages() {
  const { Refractor: R } = await import("react-refractor");
  await Promise.all(
      languages.map((lang) =>
          import(`refractor/lang/${lang}`).then((mod) =>
              R.registerLanguage(mod.default)
          )
      )
  );
}

function useRegisterLanguages() {
  useEffect(() => {
    registerLanguages();
  }, []);
}

// ----------------------------------------------
// 3. Components PortableText
// ----------------------------------------------
const ImageComponent = ({ value }) => (
    <Image
        src={urlForImage(value)}
        alt={value.alt || "Image"}
        loading="lazy"
        className="object-cover"
        sizes="(max-width: 800px) 100vw, 800px"
    />
);

const PortableTextTable = ({ value }) => {
  const [head, ...rows] = value.table.rows;

  return (
      <table>
        {head.cells.filter(Boolean).length > 0 && (
            <thead>
            <tr>
              {head.cells.map((cell, i) => (
                  <th key={i}>{cell}</th>
              ))}
            </tr>
            </thead>
        )}
        <tbody>
        {rows.map((row, r) => (
            <tr key={r}>
              {row.cells.map((cell, c) => (
                  <td key={c}>{cell}</td>
              ))}
            </tr>
        ))}
        </tbody>
      </table>
  );
};

const Code = ({ value }) => {
  useRegisterLanguages();

  return (
      <Refractor
          language={value.language || "bash"}
          value={value.code}
          markers={value.highlightedLines}
      />
  );
};

const IframePreview = ({ value }) => {
  const { url, height } = value;
  if (!url) return <p>Missing Embed URL</p>;

  const { id, service } = getVideoId(url);

  const finalURL =
      id && service === "youtube"
          ? `https://www.youtube-nocookie.com/embed/${id}`
          : url;

  return (
      <Iframe
          url={finalURL}
          width="100%"
          height={height || "350"}
          className={cx(!height && "aspect-video", "rounded-md")}
          display="block"
          position="relative"
          allowFullScreen
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
      />
  );
};

// ----------------------------------------------
// 4. Components du PortableText
// ----------------------------------------------
const components = {
  types: {
    image: ImageComponent,
    code: Code,
    embed: IframePreview,
    tables: PortableTextTable,
  },
  marks: {
    center: ({ children }) => (
        <div className="text-center">{children}</div>
    ),
    highlight: ({ children }) => (
        <span className="font-bold text-blue-500">{children}</span>
    ),
    link: ({ children, value }) => {
      const external = !value.href.startsWith("/");
      return (
          <a
              href={value.href}
              rel={external ? "noopener" : undefined}
              target={external ? "_blank" : undefined}
          >
            {children}
          </a>
      );
    },
    internalLink: ({ children, value }) => (
        <Link href={`/article/${value?.slug?.current}`}>
          {children}
        </Link>
    ),
  },
};

// ----------------------------------------------
// 5. Export final
// ----------------------------------------------
export const PortableText = (props) => (
    <PortableTextComponent components={components} {...props} />
);
