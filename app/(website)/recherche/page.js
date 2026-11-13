import SearchPage from "./home";
import {getAllArticlesByType} from "@/lib/article/client";

export async function generateMetadata({ searchParams }) {
  const { search } = await searchParams;
  const q = search?.trim();
  return {
    title: q ? `Recherche : ${q}` : "Recherche",
    description: q
      ? `Résultats de recherche ÉQUIDICO pour « ${q} ».`
      : "Recherchez une race, une discipline, du matériel ou un métier sur ÉQUIDICO.",
    alternates: { canonical: "/recherche" },
    robots: { index: false, follow: true }
  };
}

export default async function searchResultPage({searchParams}) {
  const { search } = await searchParams;
  const articles =
      search
          ? await getAllArticlesByType(search, null, true)
          : [];
  return <SearchPage articles={articles} search={search}/>;
}
