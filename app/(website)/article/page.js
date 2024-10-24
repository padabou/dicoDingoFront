import {getAllTypes} from "@/lib/type/client";
import TypesPage from "./article";
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
  return <TypesPage types={types}/>;
}

// export const revalidate = 60;
