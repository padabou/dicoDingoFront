import {getAllTypes} from "@/lib/type/client";
import TypesPage from "./article";
import {setBreadcrumb} from "@/components/serverContext";
export async function generateMetadata({ params }) {

  return {
    title: "Sommaire des catégories, cliquez et surfez",
    description: "Disciplines, races, courses, informations sur les chevaux, retrouvez ici toutes les catégories proposées",
    alternates: {
      canonical: '/article'
    },
  };
}


export default async function Categories({ params }) {
  const types = await getAllTypes();
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
      }
    ]
  }];
  setBreadcrumb(jsonLd[0].itemListElement);
  return  (
      <section>
        {/* Add JSON-LD to your page */}
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
          <TypesPage types={types}/>
      </section>
  );
}

// export const revalidate = 60;
