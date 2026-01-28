import Container from "@/components/container";
import PostList from "@/components/postlist";
import React from "react";
import PostAside from "@/components/postAside.js";

export default function Post({ data }) {

    const image = data?.pictures[0];

  return (
    <>
        <Container className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <section className="mb-12 md:mb-16 bg-[#EAF0F6] rounded-xl overflow-hidden shadow-lg">
                <div className="relative grid md:grid-cols-2 gap-4 items-center p-6 sm:p-10">
                    <div className="relative z-10 p-4 md:p-0">
                        <span className="uppercase text-sm font-semibold tracking-widest text-custom-grey">Votre destination</span>
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#00539C] my-2">ÉQUIDICO</h1>
                        <p className="text-xl text-custom-grey mt-4">
                            Votre destination complète pour tout savoir sur l'équitation. Que vous soyez débutant ou cavalier confirmé, découvrez nos articles sur les races, le matériel, les métiers équestres et bien plus encore. Apprenez à mieux connaître et prendre soin de votre compagnon à quatre pattes.
                        </p>
                    </div>

                    <div className="hidden md:block relative h-full">
                        <img src={`${process.env.NEXT_PUBLIC_PICTURE_PATH}${image.url}`} alt={image.alt}
                             className="w-full h-full object-cover rounded-md shadow-2xl"/>
                    </div>
                </div>
            </section>

            {data && (
                <>
                    <div className="grid lg:grid-cols-3 gap-10">
                        <div className="lg:col-span-2 space-y-10">
                            <section>
                                <h2 className="text-custom-blue text-2xl font-extrabold dark:text-white border-b">
                                    Types d'articles </h2>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    {data?.types?.map(type => (
                                        <PostList key={type.slug} article={type} aspect="landscape" isCategory={true}/>
                                    ))}
                                </div>
                            </section>
                            <section>
                                <h2 className="text-custom-blue mb-4 text-2xl font-extrabold dark:text-white border-b">
                                    Nos derniers articles</h2>
                                <div className="grid sm:grid-cols-2 gap-8">

                                    {data?.lastArticles?.map(article => (
                                        <PostList
                                            key={article.slug}
                                            article={article}
                                            aspect="landscape"
                                            preloadImage={true}
                                        />
                                    ))}
                                </div>
                            </section>
                            <section>
                                <h2 className="text-custom-blue text-2xl font-extrabold dark:text-white border-b">
                                    Vos articles préférés !!</h2>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    {data?.mostViewed?.map(article => (
                                        <PostList key={article.slug} article={article} aspect="landscape"/>
                                    ))}
                                </div>
                            </section>
                            <div className="mt-10 flex justify-center">
                                <a
                                    href="/"
                                    className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
                                    <span>Haut de page</span>
                                </a>
                            </div>

                        </div>
                        <aside className="hidden lg:block lg:col-span-1 space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-lg sticky top-20">
                                <h3 className="text-xl font-bold text-custom-blue mb-4 border-b pb-2">Le Blog !</h3>
                                {data?.blogArticles?.map(article => (
                                    <PostAside post={article} key={article.slug}/>
                                ))}
                            </div>
                        </aside>
                    </div>
                        </>
                        )}

                    </Container>

                </>
            );
            }
