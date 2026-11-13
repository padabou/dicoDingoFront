import Image from "next/image";
import { resolveImageUrl } from "@/lib/image";
import ReactHtmlParser from "html-react-parser";

export default function AuthorCard({ author }) {
  const imageSrc = resolveImageUrl(author?.image);
  const bio = author?.bio;
  const bioIsHtml = typeof bio === "string";

  return (
    <div className="mt-3 rounded-2xl bg-gray-50 px-8 py-8 text-gray-600 dark:bg-gray-900 dark:text-gray-300">
      <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
        <div className="relative mt-1 h-24 w-24 flex-shrink-0 ">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={author.name || "Auteur"}
              className="rounded-full object-cover"
              fill
              sizes="96px"
            />
          )}
        </div>
        <div>
          <div className="mb-3">
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
              À propos de {author.name}
            </h3>
          </div>
          <div>
            {bioIsHtml ? ReactHtmlParser(bio) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
