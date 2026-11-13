import Contribution from "@/app/(website)/contribution/contribution";

export async function generateMetadata() {
  return {
    title: "Contribuer",
    description:
      "Proposez un article ou une contribution pour enrichir le dictionnaire équestre ÉQUIDICO.",
    alternates: { canonical: "/contribution" }
  };
}

export default async function ContributionPage() {
  const settings = [];//await getSettings();
  return <Contribution settings={settings} />;
}

export const revalidate = 3600;
