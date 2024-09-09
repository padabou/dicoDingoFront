import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">Bienvenue sur notre site dédié à l'équitation !</p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
            Nous sommes une équipe de passionnés qui partage une profonde admiration pour cet art noble qu'est l'équitation. Depuis des années, nous vivons et respirons ce sport, et notre mission est de transmettre cette passion à travers une plateforme unique où chaque cavalier, amateur ou confirmé, peut trouver tout ce dont il a besoin.
        </p>
        <p>
            Notre site est né d'une envie simple : centraliser en un seul lieu toutes les informations essentielles liées à l'équitation. Que vous cherchiez des conseils pour débuter, des techniques avancées, des soins pour vos chevaux, ou les dernières tendances en matière d'équipements, nous avons rassemblé pour vous une mine de connaissances. Notre but est de rendre ces informations accessibles à tous, afin que vous puissiez vivre pleinement votre passion, en ayant tout à portée de main.
        </p>
        <p>
          Nous espérons que notre site deviendra votre ressource incontournable dans le monde de l'équitation, et que vous trouverez ici l'inspiration et les conseils pour évoluer dans cette merveilleuse discipline.
        </p>
        <p>
          L'équipe Equidico !!
        </p>
        <p>
          <Link href="/contact">On reste en contact</Link>
        </p>
      </div>
    </Container>
  );
}
