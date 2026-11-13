import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import ArticlePagination from "@/components/ArticlePagination";

export default function SearchPage({ articles, search }) {
  return (
    <>
      <Container>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-custom-grey md:text-5xl lg:text-6xl dark:text-white">
          Votre recherche
        </h1>
        <div>
          Vous avez demandé les pages qui concernent : &quot;{search}&quot;
        </div>

        {articles?.articles?.length > 0 ? (
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
          {articles.articles.map(article => (
              <PostList key={article.slug} article={article} aspect="square"/>
          ))}
        </div>
        ) : (
          <p className="mt-10 text-center text-lg text-gray-700 dark:text-gray-300">
            Aucun résultat pour cette recherche. Essayez un autre mot-clé ou parcourez les catégories.
          </p>
        )}

        <div className="mt-10 flex justify-center">
          <Link
              href="/"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
            <span>Page d&apos;accueil</span>
          </Link>
        </div>
      </Container>
    </>
  );
}
