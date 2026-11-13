import Contact from "./contact";

export async function generateMetadata() {
  return {
    title: "Contact",
    description:
      "Contactez l'équipe ÉQUIDICO pour une question, une suggestion ou un besoin lié au contenu équestre.",
    alternates: { canonical: "/contact" }
  };
}

export default async function ContactPage() {
  const settings = [];//await getSettings();
  return <Contact settings={settings} />;
}

export const revalidate = 3600;
