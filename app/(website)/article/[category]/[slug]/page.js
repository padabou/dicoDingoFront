import PostPage from "./default";

import {getArticleBySlugAndType} from "@/lib/article/client";

export async function generateMetadata({ params }) {
  const post = await getArticleBySlugAndType(params.slug, params.category.toUpperCase().replace("-", "_"));

  return {
            title: post.metaTitle,
            description: post?.metaDescription ? post?.metaDescription : '' + ' ' + params.category,
            alternates: {
                canonical: '/article/' + params.category + '/' + params.slug
            },
        };
}


export default async function PostDefault({ params }) {

    const post = await getArticleBySlugAndType(params.slug, params.category.toUpperCase().replace("-", "_"));

    const jsonLd = [{
        '@context': 'https://schema.org',
        '@type': 'Product',
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
                "name": "Article",
                "item": `${process.env.NEXT_PUBLIC_ARTICLE_URL}`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": params.category.replace("-", " "),
                "item": `${process.env.NEXT_PUBLIC_ARTICLE_URL}/${params.category}`
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": post.title,
                "item": `${process.env.NEXT_PUBLIC_ARTICLE_URL}/${params.category}/${params.slug}`
            }
        ]
    }];
   return (
        <section>
            {/* Add JSON-LD to your page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <PostPage post={post} />
        </section>
    );
}

// export const revalidate = 60;
