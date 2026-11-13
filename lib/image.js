/**
 * Resolve an image URL for Next/Image.
 * API usually returns a full URL string; Sanity-shaped objects are ignored.
 */
export function resolveImageUrl(source, fallback) {
  if (typeof source === "string" && source.length > 0) {
    return source;
  }
  if (source?.src && typeof source.src === "string") {
    return source.src;
  }
  if (source?.url && typeof source.url === "string") {
    return source.url;
  }
  return fallback || null;
}

export function resolveImageProps(source, fallback) {
  const src = resolveImageUrl(source, fallback);
  if (!src) return null;
  return { src, width: 800, height: 600 };
}
