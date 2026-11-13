export default function ArticleToc({ sections }) {
  const items = (sections || []).filter((section) => section?.title && section?.anchor);

  if (items.length < 2) {
    return null;
  }

  return (
    <nav
      aria-label="Sommaire de la fiche"
      className="not-prose my-8 rounded-xl border border-custom-clear-blue bg-custom-clear-blue/40 p-5 dark:border-gray-700 dark:bg-gray-900"
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-custom-blue dark:text-custom-clear-blue">
        Dans cette fiche
      </p>
      <ol className="m-0 list-decimal space-y-2 pl-5 text-sm text-custom-grey dark:text-gray-300">
        {items.map((section) => (
          <li key={section.anchor} className="pl-1">
            <a
              href={`#${section.anchor}`}
              className="font-medium text-custom-blue underline-offset-2 hover:underline dark:text-custom-clear-blue"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
