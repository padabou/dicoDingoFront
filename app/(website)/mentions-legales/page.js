import LegalMention from "./mentions";

export async function generateMetadata() {
  return {
    title: "Mentions légales",
    description:
      "Mentions légales et conditions d'utilisation du site ÉQUIDICO (equidico.fr).",
    alternates: { canonical: "/mentions-legales" }
  };
}

export default async function LegalMentionPage() {
  return <LegalMention settings={[]} />;
}

export const revalidate = 86400;
