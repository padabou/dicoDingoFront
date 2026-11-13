import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Searchbar from "@/components/searchbar";
import AdSenseScript from "@/components/AdSenseScript";
import { GoogleAnalytics } from '@next/third-parties/google'
import { getAllTypes } from "@/lib/type/client";

async function sharedMetaData(params) {
  const settings = [];//await getSettings();
  return {
    // enable this for resolving opengraph image
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL || "https://equidico.fr"),
    title: {
      default:
        settings?.title ||
        "ÉQUIDICO, le dictionnaire qui dit tout sur les chevaux",
      template: "%s | ÉQUIDICO"
    },
    description:
      settings?.description ||
      "On vous renseigne, on vous enseigne, on vous informe ! Races, disciplines, matériel et métiers équestres.",
    keywords: ["Equitation", "Monde équestre", "Cheval", "Race cheval", "Discipline équestre"],
    authors: [{ name: "Florent de l'Hamaide" }],
    alternates: {
      canonical: '/'
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: "ÉQUIDICO",
      images: [
        {
          url: "/img/opengraph.jpg",
          width: 800,
          height: 600,
          alt: "ÉQUIDICO - dictionnaire équestre"
        }
      ]
    },
    twitter: {
      title: settings?.title || "ÉQUIDICO",
      card: "summary_large_image"
    },
    robots: {
      index: true,
      follow: true
    }
  };
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params);
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ÉQUIDICO",
  url: process.env.NEXT_PUBLIC_URL || "https://equidico.fr",
  logo: `${process.env.NEXT_PUBLIC_URL || "https://equidico.fr"}/img/opengraph.jpg`,
  description:
    "Dictionnaire équestre : races, robes, disciplines, matériel et métiers du cheval."
};

export default async function Layout({ children, params }) {
  const types = await getAllTypes();
  const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {googleAnalyticsId ? <GoogleAnalytics gaId={googleAnalyticsId}/> : null}
      <AdSenseScript />
      <Navbar types={types} />
      <Searchbar />

      <div>{children}</div>

      <Footer types={types} />
    </>
  );
}
