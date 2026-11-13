import Confidentiality from "./confidentiality";

export async function generateMetadata() {
  return {
    title: "Politique de confidentialité",
    description:
      "Politique de confidentialité et traitement des données personnelles sur ÉQUIDICO.",
    alternates: { canonical: "/politique-de-confidentialite" }
  };
}

export default async function ConfidentialityPoliticPage() {
  return <Confidentiality settings={[]} />;
}

export const revalidate = 86400;
