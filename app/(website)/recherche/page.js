import SearchPage from "./home";
import {getAllArticlesByType} from "@/lib/article/client";

export default async function searchResultPage({searchParams}) {
  const articles =
      searchParams.search
          ? await getAllArticlesByType(searchParams.search, null, true)
          : [];
  return <SearchPage articles={articles} search={searchParams.search}/>;
}

// export const revalidate = 60;
