import Container from "@/components/container";
import PostList from "@/components/postlist";
import ArticlePagination from "@/components/ArticlePagination";
import ReactHtmlParser from "html-react-parser";
import { notFound } from "next/navigation";

export default function Category({ type, category }) {

    if (!type.slug) {
        notFound();
    }
  return (
    <>
        <Container>
        <h1 className="text-brand-primary mt-2  text-3xl font-semibold tracking-tight text-custom-blue dark:text-white lg:text-4xl lg:leading-snug">
            {type?.title}
        </h1>
        {type?.intro && (
            <div className={'mt-5 text-custom-grey'}>
                {type.intro && ReactHtmlParser(type.intro)}
            </div>
        )}
        </Container>
        {type?.articles?.totalPages > 1 && (
            <ArticlePagination articles={type.articles} url={`/article/${category}?page=`} />
        )}
      {type?.articles?.articles && (
        <Container>

          <div className="mt-10 grid gap-16 md:grid-cols-2 lg:gap-10 xl:grid-cols-4 ">
            {type?.articles?.articles.map(article => (
              <PostList key={article.slug} article={article} aspect="square" />
            ))}
          </div>

        </Container>
      )}
        {type?.articles?.totalPages > 1 && (
            <ArticlePagination articles={type?.articles}  url={`/article/${category}?page=`} />
        )}
        <Container>
            <div className="mt-10 flex justify-center">
          <a
              href="/"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
            <span>Retour à l&apos;accueil</span>
          </a>
        </div>
      </Container>

    </>

)
  ;
}
