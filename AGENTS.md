# ÉQUIDICO Front - Agent notes

Public site for **equidico.fr**: horse encyclopedia (races, coats, disciplines, tack, jobs, blog).

## Repos (monorepo siblings)

| Path | Role |
|------|------|
| `dicoDingoFront` | Next.js App Router public site (this repo) |
| `dicoDingoBack` | Java/Spring + Mongo API (`/articles`, `/types`, `/sitemap.xml`) |
| `dicoDingoAdmin2` | Admin UI at `/nimda` |
| `dicoDingoDeployement` | Docker Compose + host nginx `nginx/equidico.fr` |

## Stack (runtime)

- Next.js 16, React 19, Tailwind 4, pnpm
- Content: **Java API** via `NEXT_API_URL` (`lib/article`, `lib/type`, `lib/home`)
- Sanity packages/schemas under `lib/sanity` = **legacy unused** (no studio route)
- AdSense + GA4; Sentry
- Brand tokens: `styles/tailwind.css`

## Nginx routing (prod)

- `/` + `/_next` → front `:3000`
- `/api/` → backend `:8080` (path strip)
- `/nimda` → admin `:4000`
- `/static/` → disk static files
- Sitemap: prefer `/sitemap.xml` (nginx → backend) or `/api/sitemap.xml` **without** `X-Robots-Tag: noindex`

## Content model

Articles typed by string codes (`RACE`, `DISCIPLINE`, …) mapped to URL categories (`race`, `discipline`, …).
Nav/footer built from `GET /types` via `lib/navLinks.js` (`buildNavbarMenus` / `buildExploreLinks`). Group labels in `NAV_GROUPS`; unknown types appear as top-level links. Fallback list if API empty.

## SEO / perf pitfalls

1. Static `public/sitemap.xml` + `sitemap-0.xml` were stale (only `/api/hello`) - use backend sitemap
2. `robots.txt` must point to indexable sitemap URL
3. Do not put `X-Robots-Tag: noindex` on the sitemap location in nginx
4. Root `export const dynamic = "force-dynamic"` hurts caching - prefer page-level `revalidate`
5. `images.unoptimized: true` costs CWV; enable optimizer when remote paths allow
6. Domain: **equidico.fr** - fix any `.com` in env examples
7. Utility pages need their own `generateMetadata` (layout default title otherwise)

## Deploy notes

1. Copy nginx vhost: `cd dicoDingoDeployement/nginx && make deploy-fr` (needs host access)
2. Redeploy front so `robots.txt` + SEO metadata ship
3. After nginx: `curl -sI https://equidico.fr/sitemap.xml` must be **200** without `X-Robots-Tag: noindex`
4. Submit `https://equidico.fr/sitemap.xml` in Search Console

## Business goal

SEO traffic + AdSense. Do **not** prioritize phone/WhatsApp CRO unless asked.

## Marketing context

See `.agents/marketing-context.md`.
