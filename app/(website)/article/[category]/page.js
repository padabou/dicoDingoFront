import CategoryPage from "./category";
import {getAllArticlesByType, getArticleBySlugAndType} from "@/lib/article/client";
import {setBreadcrumb} from "@/components/serverContext";

export async function generateMetadata({ params }) {

  return {
    title: params.category.toUpperCase().replace("-", " "),
    description: "Retrouvez des articles et des infos concernant les " + params.category.replace("-", " ") + " dans le monde de l'équitation",
    alternates: {
      canonical: '/article/' + params.category
    },
  };
}


export default async function CategoryIndex({ params }) {
  const articles = await getAllArticlesByType(null, params.category.toUpperCase().replace("-", "_"), true);

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
        "name": params.category.replace("-", " "),
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
        <CategoryPage articles={articles}/>
    </section>
  );
}

// export const revalidate = 60;
