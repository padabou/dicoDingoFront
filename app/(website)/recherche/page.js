import SearchPage from "./home";
import {getAllArticlesByType} from "@/lib/article/client";

export default async function searchResultPage({searchParams}) {
  const { search } = await searchParams;
  const articles =
      search
          ? await getAllArticlesByType(search, null, true)
          : [];
  return <SearchPage articles={articles} search={search}/>;
}

// export const revalidate = 60;
