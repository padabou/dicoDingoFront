"use client";

import { useMemo } from "react";

function openShareWindow(url) {
  const width = 600;
  const height = 520;
  const left = Math.max(0, (window.screen.width - width) / 2);
  const top = Math.max(0, (window.screen.height - height) / 2);
  window.open(
    url,
    "equidico-share",
    `noopener,noreferrer,width=${width},height=${height},left=${left},top=${top}`
  );
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#1877F2"
        d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.956.928-1.956 1.88v2.257h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
      />
    </svg>
  );
}

function XIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.924L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
      />
    </svg>
  );
}

export default function SocialShare({ url, title, className = "" }) {
  const shareUrl = useMemo(() => {
    if (url) return url;
    if (typeof window !== "undefined") return window.location.href;
    return "";
  }, [url]);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(title || "ÉQUIDICO");

  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const xHref = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`;

  const handleShare = (href) => (event) => {
    event.preventDefault();
    if (!shareUrl) return;
    openShareWindow(href);
  };

  return (
    <div
      className={`flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4 ${className}`}
    >
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Partager cette fiche
      </p>
      <div className="flex items-center gap-3">
        <a
          href={facebookHref}
          onClick={handleShare(facebookHref)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Partager sur Facebook"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200 transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-custom-blue dark:bg-gray-900 dark:ring-gray-700"
        >
          <FacebookIcon className="h-5 w-5" />
        </a>
        <a
          href={xHref}
          onClick={handleShare(xHref)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Partager sur X"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200 transition hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-custom-blue dark:bg-gray-900 dark:ring-gray-700"
        >
          <XIcon className="h-4 w-4 text-black dark:text-white" />
        </a>
      </div>
    </div>
  );
}
