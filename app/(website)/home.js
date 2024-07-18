import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";

export default function Post({ data }) {
  return (
    <>
        <Container>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                EQUI DICO
            </h1>
            <h2 className="text-4xl font-extrabold dark:text-white">
                pour tout savoir sur les chevaux !!
            </h2>
        </Container>
        {data && (
            <Container>
                <h2 className="text-4xl font-extrabold dark:text-white">
                    Nos derniers articles !!</h2>
                <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">

                    {data?.lastArticles?.map(article => (
                        <PostList
                            key={article.slug}
                            article={article}
                            aspect="landscape"
                            preloadImage={true}
                        />
                    ))}
                </div>
                <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
                    <h2 className="text-4xl font-extrabold dark:text-white">
                        Vos articles préférés !!</h2>
                    {data?.mostViewed?.map(article => (
                        <PostList key={article.slug} article={article} aspect="square"/>
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                    <Link
                        href="/"
                        className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
                        <span>Page d&apos;accueil</span>
                    </Link>
                </div>
            </Container>
        )}
    </>
  );
}
