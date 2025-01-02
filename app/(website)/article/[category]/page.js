import CategoryPage from "./category";
import {setBreadcrumb} from "@/components/serverContext";
import Breadcrumb from "@/components/breadcrumb";
import {getTypeWithArticle} from "@/lib/type/client";

export async function generateMetadata({ params }) {
  const { category } = await params;
  const type = await getTypeWithArticle(category.toUpperCase().replace("-", "_"));
  return {
    title: type?.metaTitle,
    description: type?.metaDescription,
    alternates: {
      canonical: '/article/' + category
    },
  };
}


export default async function CategoryIndex({ params, searchParams }) {
  const { category } = await params;
  const { page } = await searchParams;
  const type = await getTypeWithArticle(category.toUpperCase().replace("-", "_"), page);

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
        "item": `${process.env.NEXT_PUBLIC_ARTICLE_URL}/${category}`
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
        <CategoryPage articles={type.articles} category={category}/>
    </section>
  );
}

// export const revalidate = 60;
