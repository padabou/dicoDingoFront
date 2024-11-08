import CategoryPage from "./category";
import {getAllArticlesByType, getArticleBySlugAndType} from "@/lib/article/client";
import {setBreadcrumb} from "@/components/serverContext";
import Breadcrumb from "@/components/breadcrumb";
import {getTypeWithArticle} from "@/lib/type/client";

export async function generateMetadata({ params }) {
  const type = await getTypeWithArticle(params.category.toUpperCase().replace("-", "_"));
  return {
    title: type?.metaTitle,
    description: type?.metaDescription,
    alternates: {
      canonical: '/article/' + params.category
    },
  };
}


export default async function CategoryIndex({ params }) {
  const type = await getTypeWithArticle(params.category.toUpperCase().replace("-", "_"));

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
        "name": type.titleBreadcrumb,
        "item": `${process.env.NEXT_PUBLIC_ARTICLE_URL}/${params.category}`
      }
    ]
  }];
  setBreadcrumb(jsonLd[0].itemListElement);
  return (
      <section>
      {/* Add JSON-LD to your page */}
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
        <Breadcrumb />
        <CategoryPage articles={type.articles}/>
    </section>
  );
}

// export const revalidate = 60;
