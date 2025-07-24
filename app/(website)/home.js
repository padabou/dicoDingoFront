import Container from "@/components/container";
import PostList from "@/components/postlist";
import Carousel from "@/components/carousel";

export default function Post({ data }) {
  return (
    <>
        <Container>
            <Carousel
                images={data?.pictures}
            />
            <h1 className="mt-8 mb-4 text-4xl font-extrabold leading-none tracking-tight text-custom-grey md:text-5xl lg:text-6xl dark:text-white">
                Bienvenue sur EQUIDICO, votre destination équestre !
            </h1>
            <h2 className="text-4xl font-extrabold dark:text-white">
                Pour tout savoir sur les chevaux !!
            </h2>
            <p className={'mt-5 text-custom-grey'}>
                Découvrez l&apos;univers fascinant de l&apos;équitation et des chevaux à travers nos articles de blog,
                pensés pour les cavaliers de tous niveaux et les passionnés du monde équestre. Que vous soyez débutant,
                cavalier confirmé ou simplement curieux d’en savoir plus, notre mission est de vous offrir un espace où
                la connaissance rencontre la passion.
            </p>
            <p className={'mt-5 text-custom-grey'}>
                🌟 Articles pratiques : Astuces pour améliorer votre technique, choisir votre équipement, et prendre soin
                de votre monture.
            </p>
            <p className={'mt-5 text-custom-grey'}>
                🐎 Portraits de chevaux : Explorez les différentes races, robes, tempéraments, et découvrez des anecdotes
                sur ces majestueux animaux.
            </p>
            <p className={'mt-5 text-custom-grey'}>
                🔎 Focus sur l&apos;éthologie : Comprendre le comportement du cheval et tisser un lien profond avec votre
                compagnon.
            </p>
            <p className={'mt-5 text-custom-grey'}>
                📚 Éducation continue : Des conseils, des guides, et des témoignages pour vous accompagner dans votre
                pratique équestre.
            </p>
            <p className={'mt-5 text-custom-grey'}>
                🚧 Equidico débute, le contenu va évoluer en continu, si vous ne trouvez pas ce que vous cherchez, cela
                ne devrait pas tarder.
            </p>
            <p className={'mt-5 text-custom-grey'}>
                📸 Tu veux nous aider ? Tu veux qu&apos;on ajoute une page informative sur ton équin ou ton matériel ?
                Envoie nous une photo et une petite description, on se charge du reste, on te crédite dans la page et on
                te prévient quand c&apos;est en ligne !
                <a className={'mt-5 text-custom-red'} href={`contribution`}> ✍️Contribuer</a>
            </p>
        </Container>
        {data && (
            <>
                <Container className="bg-custom-clear-blue pb-4">
                    <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
                        <h2 className="text-custom-sauge-green text-4xl font-extrabold dark:text-white">
                            Toutes nos rubriques ici !!</h2>
                        {data?.types?.map(type => (
                            <PostList key={type.slug} article={type} aspect="square"/>
                        ))}
                    </div>

                </Container>
                <Container className="bg-custom-broken-white pb-4">
                    <h2 className="text-custom-sauge-green mb-4 text-4xl font-extrabold dark:text-white">
                        Nos derniers articles !!</h2>
                <div className="grid gap-10 md:grid-cols-3 lg:gap-10 ">

                    {data?.lastArticles?.map(article => (
                        <PostList
                            key={article.slug}
                            article={article}
                            aspect="landscape"
                            preloadImage={true}
                        />
                    ))}
                </div>
            </Container>
            <Container className="bg-custom-clear-blue pb-4">
                <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
                    <h2 className="text-custom-sauge-green text-4xl font-extrabold dark:text-white">
                        Vos articles préférés !!</h2>
                    {data?.mostViewed?.map(article => (
                        <PostList key={article.slug} article={article} aspect="square"/>
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                    <a
                        href="/"
                        className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
                        <span>Haut de page</span>
                    </a>
                </div>
            </Container>

            </>
        )}
    </>
  );
}
