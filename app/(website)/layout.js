import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Searchbar from "@/components/searchbar";

async function sharedMetaData(params) {
  const settings = [];//await getSettings();
  return {
    // enable this for resolving opengraph image
    metadataBase: new URL(process.env.NEXT_PUBLIC_URL),
    title: {
      default:
        settings?.title ||
        "EQUIDICO, le blog qui dit tout sur les chevaux",
      template: "%s | EQUIDICO, le blog qui dit tout sur les chevaux"
    },
    description:
      settings?.description ||
      "On vous renseigne, on vous enseigne, on vous informe !",
    keywords: ["Equitation", "Monde équestre", "Cheval"],
    authors: [{ name: "P4d4b@u" }],
    alternates: {
      canonical: '/'
    },
    openGraph: {
      images: [
        {
          url:
            "/img/opengraph.jpg",
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || "EQUI Dico",
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

export default async function Layout({ children, params }) {
  const settings = [];//await getSettings();
  return (
    <>
      <Navbar {...settings} />
      <Searchbar />

      <div>{children}</div>

      <Footer {...settings} />
    </>
  );
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
