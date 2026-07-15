"use client";

import { useEffect, useRef } from "react";
import { cx } from "@/utils/all";
import { IN_FEED_LAYOUT_KEY, isAdSlotConfigured } from "@/lib/adsense";

const FORMAT_STYLES = {
  horizontal: "min-h-[90px] w-full max-w-[728px]",
  rectangle: "min-h-[250px] w-full max-w-[336px]",
  sidebar: "min-h-[250px] w-full max-w-[300px]",
  "in-feed": "min-h-[250px] w-full",
  "in-article": "min-h-[250px] w-full max-w-[728px]"
};

const AD_FORMAT_ATTR = {
  horizontal: "auto",
  rectangle: "auto",
  sidebar: "auto",
  "in-feed": "auto",
  "in-article": "auto"
};

export default function AdBanner({
  slot,
  format = "horizontal",
  className,
  label = true,
  wrapped = false
}) {
  const insRef = useRef(null);
  const pushedRef = useRef(false);

  useEffect(() => {
    if (!isAdSlotConfigured(slot) || pushedRef.current) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushedRef.current = true;
    } catch (error) {
      console.error("AdSense:", error);
    }
  }, [slot]);

  if (!isAdSlotConfigured(slot)) {
    return null;
  }

  const ad = (
    <aside
      role="complementary"
      aria-label="Publicité"
      className={cx(
        "mx-auto flex flex-col items-center",
        FORMAT_STYLES[format] ?? FORMAT_STYLES.horizontal,
        className
      )}
    >
      {label && (
        <span className="mb-1 text-xs uppercase tracking-wide text-gray-400">
          Publicité
        </span>
      )}
      <ins
        ref={insRef}
        className="adsbygoogle block w-full"
        style={{ display: "block" }}
        data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID}
        data-ad-slot={slot}
        data-ad-format={AD_FORMAT_ATTR[format] ?? "auto"}
        {...(format === "in-feed" && IN_FEED_LAYOUT_KEY
          ? { "data-ad-layout-key": IN_FEED_LAYOUT_KEY }
          : {})}
        {...(format !== "in-feed" ? { "data-full-width-responsive": "true" } : {})}
      />
    </aside>
  );

  if (wrapped) {
    return (
      <div className="flex h-full flex-col items-center justify-center overflow-hidden rounded-xl bg-white p-4 shadow-lg">
        {ad}
      </div>
    );
  }

  return ad;
}
