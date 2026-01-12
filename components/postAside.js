import Image from "next/image";
import Link from "next/link";
import { cx } from "@/utils/all";
import { urlForImage } from "@/lib/sanity/image";
import { parseISO, format } from "date-fns";
import { PhotoIcon } from "@heroicons/react/24/outline";
import CategoryLabel from "@/components/blog/category";
import React from "react";

export default function PostAside({
  post,
  aspect,
  preloadImage,
  featured = false
}) {
  const imageSrc = post?.picture
      ? post?.picture
      : `${process.env.NEXT_PUBLIC_PICTURE_PATH}${process.env.NEXT_PUBLIC_DEFAULT_PICTURE}`;
  const articleHref = `/article/${post?.type ? `${post.type.toLowerCase().replace("_", "-")}/` : ""}${post.slug}`;


  return (
    <>
      <div
        className={cx(
          "flex items-start space-x-3 mb-4"
        )}>
        <img src={imageSrc} alt={post?.pictureAlt}
             className="w-20 h-16 object-cover rounded"/>
          <div>
            <p className="text-sm font-semibold text-custom-blue leading-tight hover:text-custom-red">
              <a href={articleHref}>{post?.title}</a>
            </p>
            <span className="text-xs text-gray-500">
              <time
                className="text-sm"
                dateTime={post?.publishedAt || post?.createdAt}>
              {format(
                  parseISO(post?.publishedAt || post?.createdAt),
                  "dd/MM/yyyy"
              )}
              </time>
            </span>
          </div>
      </div>
    </>
  );
}
