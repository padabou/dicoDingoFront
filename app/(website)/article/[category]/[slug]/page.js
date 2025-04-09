import PostPage from "./default";

import {getArticleBySlugAndType} from "@/lib/article/client";
import {getBreadcrumb, setBreadcrumb} from "@/components/serverContext";
import Breadcrumb from "@/components/breadcrumb";

export async function generateMetadata({ params }) {
  const { category } = await params;
  const { slug } = await params;
    const post = await getArticleBySlugAndType(slug, category.toUpperCase().replace("-", "_"));

  return {
            title: post?.metaTitle,
            description: post?.metaDescription ? post?.metaDescription : '' + ' ' + category,
            alternates: {
                canonical: '/article/' + category.replace("_", "-") + '/' + slug
            },
        };
}

export default async function PostDefault({ params }) {
    const { category } = await params;
    const { slug } = await params;
    const post = await getArticleBySlugAndType(slug, category.toUpperCase().replace("-", "_"));

    const jsonLd = [{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement' : [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": `${process.env.NEXT_PUBLIC_URL}`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Articles",
                "item": `${process.env.NEXT_PUBLIC_ARTICLE_URL}`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": category.replace("-", " "),
                "item": `${process.env.NEXT_PUBLIC_ARTICLE_URL}/${category}`
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": post.title,
                "item": `${process.env.NEXT_PUBLIC_ARTICLE_URL}/${category}/${slug}`
            }
        ]
    }];
    const breadcrumb = [
            {
                "name": "Accueil",
                "item": `${process.env.NEXT_PUBLIC_URL}`
            },
            {
                "name": "Articles",
                "item": `${process.env.NEXT_PUBLIC_ARTICLE_URL}`
            },
            {
                "name": category.replace("_", " "),
                "item": `${process.env.NEXT_PUBLIC_ARTICLE_URL}/${category.replace("_", "-")}`
            },
            {
                "name": post?.titleBreadcrumb,
                "item": `${process.env.NEXT_PUBLIC_ARTICLE_URL}/${category.replace("_", "-")}/${slug}`
            }
        ]
    ;
    setBreadcrumb(breadcrumb);
   return (
        <section>
            {/* Add JSON-LD to your page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Breadcrumb />
            <PostPage post={post} />
        </section>
    );
}

// export const revalidate = 60;
