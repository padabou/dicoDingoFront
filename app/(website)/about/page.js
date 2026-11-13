import About from "./about";

export async function generateMetadata() {
  return {
    title: "À propos d'ÉQUIDICO",
    description:
      "Découvrez ÉQUIDICO, le dictionnaire équestre qui renseigne sur les races, disciplines, matériel et métiers du cheval.",
    alternates: { canonical: "/about" }
  };
}

export default async function AboutPage() {
  const authors = [];//await getAllAuthors();
  const settings = [];//await getSettings();
  return <About settings={settings} authors={authors} />;
}

export const revalidate = 3600;
