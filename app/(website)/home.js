import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";

export default function Post({ data }) {
  return (
    <>
        <Container>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Bienvenue sur EQUIDICO, votre destination équestre !
            </h1>
            <h2 className="text-4xl font-extrabold dark:text-white">
                Pour tout savoir sur les chevaux !!
            </h2>
            <p className={'mt-5'}>
                Découvrez l'univers fascinant de l'équitation et des chevaux à travers nos articles de blog, pensés pour
                les cavaliers de tous niveaux et les passionnés du monde équestre. Que vous soyez débutant, cavalier
                confirmé ou simplement curieux d’en savoir plus, notre mission est de vous offrir un espace où la
                connaissance rencontre la passion.
            </p>
            <p className={'mt-5'}>
                🌟 Articles pratiques : Astuces pour améliorer votre technique, choisir votre équipement, et prendre soin
                de votre monture.
            </p>
            <p className={'mt-5'}>
                🐎 Portraits de chevaux : Explorez les différentes races, robes, tempéraments, et découvrez des anecdotes
                sur ces majestueux animaux.
            </p>
            <p className={'mt-5'}>
                🔎 Focus sur l'éthologie : Comprendre le comportement du cheval et tisser un lien profond avec votre
                compagnon.
            </p>
            <p className={'mt-5'}>
                📚 Éducation continue : Des conseils, des guides, et des témoignages pour vous accompagner dans votre
                pratique équestre.
            </p>
            <p className={'mt-5'}>
                🚧 Equidico débute, le contenu va évoluer en continu, si vous ne trouvez pas ce que vous cherchez, cela ne devrait pas tarder.
            </p>
        </Container>
        {data && (
            <Container>
                <h2 className="text-4xl font-extrabold dark:text-white">
                    Nos derniers articles !!</h2>
                <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">

                    {data?.lastArticles?.map(article => (
                        <PostList
                            key={article.slug}
                            article={article}
                            aspect="landscape"
                            preloadImage={true}
                        />
                    ))}
                </div>
                <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
                    <h2 className="text-4xl font-extrabold dark:text-white">
                        Vos articles préférés !!</h2>
                    {data?.mostViewed?.map(article => (
                        <PostList key={article.slug} article={article} aspect="square"/>
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                    <Link
                        href="/"
                        className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
                        <span>Page d&apos;accueil</span>
                    </Link>
                </div>
            </Container>
        )}
    </>
  );
}
