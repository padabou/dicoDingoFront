import Image from "next/image";
import { cx } from "@/utils/all";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "@/components/blog/category";
import ReactHtmlParser from "html-react-parser";

export default function PostList({
  article,
  aspect,
    isCategory,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
  fontWeight
}) {
  const imageSrc = article?.picture
    ? article?.picture
    : `${process.env.NEXT_PUBLIC_PICTURE_PATH}${process.env.NEXT_PUBLIC_DEFAULT_PICTURE}`;
  const AuthorimageProps = article?.author?.image
    ? urlForImage(article.author.image)
    : `${process.env.NEXT_PUBLIC_PICTURE_PATH}${process.env.NEXT_PUBLIC_DEFAULT_PICTURE}`;
  const articleHref = `/article/${article?.type ? `${article.type.toLowerCase().replace("_", "-")}/` : ""}${article.slug}`;
  return (
      <>

        <div className={cx("bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl")}>
          <a
              className={cx(
                  "relative block cursor-pointer",
                  aspect === "landscape"
                      ? "aspect-video"
                      : aspect === "custom"
                          ? "aspect-[5/4]"
                          : "aspect-square"
              )}
              href={articleHref}>
          {imageSrc ? (
              <Image
                  src={imageSrc}
                  alt={article.title || "Thumbnail"}
                  priority={preloadImage ? true : false}
                  className="w-full h-48 object-cover"
                  fill
                  sizes="(max-width: 768px) 30vw, 33vw"
              />
          ) : (
              <span className={cx("absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200")}>
                <PhotoIcon/>
              </span>
          )}
          </a>
          <div className={cx("p-5")}>
            <h3 className={cx("text-xl font-semibold  mb-2")}>
                <a href={articleHref}
                    className={`text-custom-red hover:text-custom-sauge-green from-green-200 to-green-100 bg-size-[0px_10px] bg-bottom-left
                    bg-no-repeat
                    transition-[background-size]
                    duration-500
                    hover:bg-size-[100%_3px]
                    group-hover:bg-size-[100%_10px]
                    dark:from-purple-800 dark:to-purple-900
                    ${isCategory ? "block w-full text-center" : ""}`
                    }>
                  {article.title}
                </a>
            </h3>

              {!isCategory && article?.intro && (
                <p className="text-gray-600 text-sm mb-4 line-clamp-[6]">
                  {article.intro && ReactHtmlParser(article.intro)} ...
                </p>
              )}
                {!isCategory && (
                  <p className="px-20">
                      <a href={articleHref}
                        className="bg-custom-blue text-white px-6 py-2 rounded-full font-semibold hover:bg-custom-sauge-green transition-all duration-500 hover:scale-105
                                    block w-full text-center">
                                Voir plus !
                    </a>
                  </p>
              )}
            {(article?.publishedAt || article.createdAt) &&
                <div className={cx("flex items-center justify-between mt-4 text-gray-500 dark:text-gray-400")}>
                  <time
                      className="truncate text-sm"
                      dateTime={article?.publishedAt || article.createdAt}>
                    {format(
                        parseISO(article?.publishedAt || article.createdAt),
                        "dd/MM/yyyy"
                    )}
                  </time>
                </div>
            }
          </div>
        </div>

        {/* <div
            className={cx(
                "group mx-8",
                minimal && "grid gap-10 md:grid-cols-2"
            )}>
          <div
              className={cx(
                  " overflow-hidden  bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800 grid gap-4 md:grid-cols-2"
              )}>
            <a
                className={cx(
                    "relative block cursor-pointer",
                    aspect === "landscape"
                        ? "aspect-video"
                        : aspect === "custom"
                            ? "aspect-[5/4]"
                            : "aspect-square"
                )}
                href={articleHref}>
              {imageSrc ? (
                  <Image
                      src={imageSrc}
                      alt={article.title || "Thumbnail"}
                      priority={preloadImage ? true : false}
                      className="object-cover transition-all rounded-md aspect"
                      fill
                      sizes="(max-width: 768px) 30vw, 33vw"
                  />
              ) : (
                  <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
                <PhotoIcon/>
              </span>
              )}
            </a>
            {article?.intro && (
                <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600 ">
                  <p className="line-clamp-[6]">
                    {article.intro && ReactHtmlParser(article.intro)} ...
                  </p>
                  <p>
                    <a href={articleHref}>
                      <span
                          className="text-custom-red hover:text-custom-sauge-green bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
                            bg-no-repeat
                            transition-[background-size]
                            duration-500
                            hover:bg-[length:100%_3px]
                            group-hover:bg-[length:100%_10px]
                            dark:from-purple-800 dark:to-purple-900">
                        Voir plus !
                      </span>
                    </a>
                  </p>
                </div>
            )}
          </div>

          <div className={cx(minimal && "flex items-center")}>
            <div>
              <CategoryLabel
                  categories={article.categories}
                  nomargin={minimal}
              />
              <h2
                  className={cx(
                      fontSize === "large"
                          ? "text-2xl"
                          : minimal
                              ? "text-3xl"
                              : "text-lg",
                      fontWeight === "normal"
                          ? "line-clamp-2 font-medium  tracking-normal text-black"
                          : "font-semibold leading-snug tracking-tight",
                      "mt-2    dark:text-white"
                  )}>
                <a href={articleHref}>
                <span
                    className="text-custom-red hover:text-custom-sauge-green bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
                    bg-no-repeat
                    transition-[background-size]
                    duration-500
                    hover:bg-[length:100%_3px]
                    group-hover:bg-[length:100%_10px]
                    dark:from-purple-800 dark:to-purple-900">
                  {article.title}
                </span>
                </a>
              </h2>

              <div className="hidden">
                {article.excerpt && (
                    <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                      <a
                          href={articleHref}>
                        {article.excerpt}
                      </a>
                    </p>
                )}
              </div>
              <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
                {article?.author &&
                    <a href={`/author/${article?.author?.slug?.current}`}>
                      <div className="flex items-center gap-3">
                        <div className="relative h-5 w-5 flex-shrink-0">
                          {article?.author?.image && (
                              <Image
                                  src={AuthorimageProps.src}
                                  alt={article?.author?.name}
                                  className="rounded-full object-cover"
                                  fill
                                  sizes="20px"
                              />
                          )}
                        </div>
                        <span className="truncate text-sm">
                      {article?.author?.name}
                    </span>
                      </div>
                    </a>
                }

                {(article?.publishedAt || article.createdAt) &&
                    <time
                        className="truncate text-sm"
                        dateTime={article?.publishedAt || article.createdAt}>
                      {format(
                          parseISO(article?.publishedAt || article.createdAt),
                          "dd/MM/yyyy"
                      )}
                    </time>
                }
              </div>
            </div>
          </div>
        </div>
        */}
      </>
  );
}
