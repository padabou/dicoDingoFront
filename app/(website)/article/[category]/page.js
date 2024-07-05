import CategoryPage from "./category";
import {getAllArticlesByType, getArticleBySlugAndType} from "@/lib/article/client";

export async function generateMetadata({ params }) {
  const post = await getArticleBySlugAndType(params.slug, params.category.toUpperCase().replace("-", "_"));

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
  return <CategoryPage articles={articles}/>;
}

// export const revalidate = 60;
