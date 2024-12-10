import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Link from "next/link";

export default function ArticlePagination({ articles, url }) {

  return (
      <Container>
          <div className="flex justify-center">
              {articles?.previousPage && (
                  <a
                      href={`${url}${articles?.previousPage}`}
                      className="relative inline-flex items-center gap-1 rounded-l-md border border-gray-300 bg-white px-3 py-2 pr-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
                      <span>{`<< ${articles?.previousPage}`}</span>
                  </a>
              )
              }
              {(articles?.currentPage && articles?.totalPages > 1) && (
                  <a
                      href="#"
                      className="relative inline-flex items-center mr-2 ml-2 gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pr-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
                      <span>{articles?.currentPage}</span>
                  </a>

              )
              }
              {articles?.nextPage && (
                  <a
                      href={`${url}${articles?.nextPage}`}
                      className="relative inline-flex items-center gap-1 rounded-r-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
                      <span>{`${articles?.nextPage} >>`} </span>
                  </a>

              )}
          </div>
      </Container>
  );
}
