import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";

export default function Article({ types }) {
  return (
    <>
      {types && (
        <Container>

          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
            {types.map(type => (
              <PostList key={type.slug} article={type} aspect="square" />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href="/"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
              <span>Retour à l&apos;accueil</span>
            </a>
          </div>
        </Container>
      )}
    </>
  );
}
