import Contribution from "@/app/(website)/contribution/contribution";

export default async function ContributionPage() {
  const settings = [];//await getSettings();
  return <Contribution settings={settings} />;
}

// export const revalidate = 60;
