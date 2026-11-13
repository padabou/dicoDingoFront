/**
 * Nav groups for UX only. Membership is by type slug (hyphen form).
 * Any enabled type not listed still appears as a top-level item / explore link.
 */
export const NAV_GROUPS = [
  {
    label: "Le cheval",
    slugs: ["robe", "race", "cheval-quotidien", "discipline"]
  },
  {
    label: "Le Matériel",
    slugs: ["materiel-cheval", "materiel-cavalier"]
  }
];

/** Preferred display labels when API title is empty / raw. */
export const SLUG_LABELS = {
  robe: "Les Robes",
  race: "Les Races",
  "cheval-quotidien": "Son quotidien",
  discipline: "Les Disciplines",
  "materiel-cheval": "Matériel du cheval",
  "materiel-cavalier": "Matériel du cavalier",
  metier: "Les métiers",
  blog: "Blog",
  anecdote: "Anecdotes"
};

/** Static fallback if `/types` fails. */
export const FALLBACK_TYPES = [
  { slug: "robe", title: "Les Robes" },
  { slug: "race", title: "Les Races" },
  { slug: "cheval-quotidien", title: "Son quotidien" },
  { slug: "discipline", title: "Les Disciplines" },
  { slug: "materiel-cheval", title: "Matériel du cheval" },
  { slug: "materiel-cavalier", title: "Matériel du cavalier" },
  { slug: "metier", title: "Les métiers" },
  { slug: "blog", title: "Blog" },
  { slug: "anecdote", title: "Anecdotes" }
];

export function normalizeTypeSlug(type) {
  const raw = type?.slug || type?.name || "";
  return String(raw).toLowerCase().replace(/_/g, "-").trim();
}

export function typePath(type) {
  const slug = normalizeTypeSlug(type);
  return slug ? `/article/${slug}` : "/article";
}

export function typeLabel(type) {
  const slug = normalizeTypeSlug(type);
  return (
    type?.titleBreadcrumb ||
    type?.title ||
    SLUG_LABELS[slug] ||
    slug.replace(/-/g, " ")
  );
}

function asTypeList(types) {
  if (!Array.isArray(types) || types.length === 0) {
    return FALLBACK_TYPES;
  }
  return types;
}

export function buildExploreLinks(types) {
  const list = asTypeList(types);
  const links = [
    { title: "Toutes les catégories", path: "/article" },
    ...list.map((type) => ({
      title: typeLabel(type),
      path: typePath(type)
    }))
  ];
  // Dedupe by path
  const seen = new Set();
  return links.filter((link) => {
    if (seen.has(link.path)) return false;
    seen.add(link.path);
    return true;
  });
}

/**
 * Build left/right navbar menus from API types.
 * Groups keep previous IA; ungrouped types go right before Contribuer.
 */
export function buildNavbarMenus(types) {
  const list = asTypeList(types);
  const bySlug = new Map();
  for (const type of list) {
    const slug = normalizeTypeSlug(type);
    if (slug) bySlug.set(slug, type);
  }

  const used = new Set();

  const groupedMenus = NAV_GROUPS.map((group) => {
    const children = group.slugs
      .map((slug) => {
        const type = bySlug.get(slug);
        if (!type) return null;
        used.add(slug);
        return { title: typeLabel(type), path: typePath(type) };
      })
      .filter(Boolean);

    if (children.length === 0) return null;

    return {
      label: group.label,
      href: children[0].path,
      children
    };
  }).filter(Boolean);

  const ungrouped = [...bySlug.entries()]
    .filter(([slug]) => !used.has(slug))
    .sort((a, b) => typeLabel(a[1]).localeCompare(typeLabel(b[1]), "fr"))
    .map(([, type]) => ({
      label: typeLabel(type),
      href: typePath(type)
    }));

  const leftmenu = [
    { label: "Accueil", href: "/" },
    { label: "Catégories", href: "/article" },
    ...groupedMenus
  ];

  const rightmenu = [
    ...ungrouped,
    { label: "Contribuer", href: "/contribution" }
  ];

  return { leftmenu, rightmenu };
}
