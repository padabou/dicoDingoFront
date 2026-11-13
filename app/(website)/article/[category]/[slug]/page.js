import PostPage from "./default";

import {getArticleBySlugAndType} from "@/lib/article/client";
import {setBreadcrumb} from "@/components/serverContext";
import Breadcrumb from "@/components/breadcrumb";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const post = await getArticleBySlugAndType(slug, category.toUpperCase().replace("-", "_"));

  if (!post?.slug) {
    return { title: "Article introuvable" };
  }

  const description =
    post?.metaDescription ||
    `${post?.title || slug} - ${category.replace(/-/g, " ")} | ÉQUIDICO`;
  const canonical = `/article/${category.replace("_", "-")}/${slug}`;
  const image = post?.picture || "/img/opengraph.jpg";

  return {
    title: post?.metaTitle || post?.title,
    description,
    alternates: { canonical },
    openGraph: {
      title: post?.metaTitle || post?.title,
      description,
      type: "article",
      url: canonical,
      images: [
        {
          url: image,
          alt: post?.pictureAlt || post?.title || "ÉQUIDICO"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post?.metaTitle || post?.title,
      description
    }
  };
}

export const revalidate = 3600;

export default async function PostDefault({ params }) {
    const { category, slug } = await params;
    const post = await getArticleBySlugAndType(slug, category.toUpperCase().replace("-", "_"));

    if (!post?.slug) {
      notFound();
    }

    const siteUrl = process.env.NEXT_PUBLIC_URL || "https://equidico.fr";
    const articleUrl = `${process.env.NEXT_PUBLIC_ARTICLE_URL || `${siteUrl}/article`}/${category}/${slug}`;

    const jsonLd = [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement' : [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": siteUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Articles",
                "item": process.env.NEXT_PUBLIC_ARTICLE_URL || `${siteUrl}/article`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": post.typeLabel,
                "item": `${process.env.NEXT_PUBLIC_ARTICLE_URL || `${siteUrl}/article`}/${category}`
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": post.title,
                "item": articleUrl
            }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.metaDescription || post.title,
        image: post.picture ? [post.picture] : undefined,
        datePublished: post.publishedAt || post.createdAt || undefined,
        dateModified: post.updatedAt || post.publishedAt || undefined,
        author: post.author?.name
          ? { "@type": "Person", name: post.author.name }
          : { "@type": "Organization", name: "ÉQUIDICO" },
        publisher: {
          "@type": "Organization",
          name: "ÉQUIDICO",
          logo: {
            "@type": "ImageObject",
            url: `${siteUrl}/img/opengraph.jpg`
          }
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl
        }
      }
    ];
    const breadcrumb = [
            {
                "name": "Accueil",
                "item": siteUrl
            },
            {
                "name": "Articles",
                "item": process.env.NEXT_PUBLIC_ARTICLE_URL || `${siteUrl}/article`
            },
            {
                "name": post?.typeLabel,
                "item": `${process.env.NEXT_PUBLIC_ARTICLE_URL || `${siteUrl}/article`}/${category.replace("_", "-")}`
            },
            {
                "name": post?.titleBreadcrumb,
                "item": `${process.env.NEXT_PUBLIC_ARTICLE_URL || `${siteUrl}/article`}/${category.replace("_", "-")}/${slug}`
            }
        ]
    ;
    setBreadcrumb(breadcrumb);
   return (
        <section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Breadcrumb />
            <PostPage post={post} />
        </section>
    );
}
