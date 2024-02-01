import React, { useState, useEffect } from "react";
import { Patua_One } from "next/font/google";
import { useRouter } from "next/navigation";
import { pb } from "../(auth)/auth";
import Link from "next/link";
import Image from "next/image";

const patua = Patua_One({ weight: '400', subsets: ['latin'] });

const UserView = ({ session }) => {
    const router = useRouter();
    const [loggedIn, setLoggedIn] = useState(false);
    const [role, setRole] = useState("user");
    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [articlesPerPage, setArticlesPerPage] = useState(3);

    const getArticles = async () => {
        try {
            const record = await pb.collection("articles").getFullList({
                sort: "-created",
            });

            const renderedArticles = record.map((article) => {
                const url = pb.files.getUrl(article, article.photo);

                const date = new Date(article.created)
                const formattedDate = date.toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                })

                return ({
                    id: article.id,
                    title: article.title,
                    created: formattedDate,
                    description: article.description,
                    content: article.content,
                    photo: url
                })
            });

            setArticles(renderedArticles);
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    };

    const deleteArticle = async (id) => {
        try {
            await pb.collection('articles').delete(id);
            getArticles();
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setLoggedIn(session);
    }, [session]);

    useEffect(() => {
        getArticles();
        if (pb.authStore.model) setRole(pb.authStore.model.Role)
    }, [loggedIn]);

    useEffect(() => {
        const updateArticlesPerPage = () => {
            const screenHeight = window.innerHeight;
            const articleHeight = 220; // Adjust this value based on your article's height
            const newArticlesPerPage = Math.floor(screenHeight / articleHeight);
            console.log(newArticlesPerPage)
            setArticlesPerPage(newArticlesPerPage);
        };

        updateArticlesPerPage();

        window.addEventListener("resize", updateArticlesPerPage);

        return () => {
            window.removeEventListener("resize", updateArticlesPerPage);
        };
    }, []);

    // Logic for pagination
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <section className='flex flex-col max-w-1/2 justify-start items-center h-[80vh]'>
            {currentArticles.map((article, key) => (
                <div className="w-[800px] mt-5 shadow-md bg-white" key={article.id}>
                    <div className="flex flex-grow justify-end">{role === 'admin' ? <button className="px-2 bg-red-500 rounded" onClick={() => deleteArticle(article.id)}>X</button> : null}</div>
                    <ul className="flex min-h-44 gap-5 py-5">
                        <div className="flex w-1/3 pt-2">
                            <p className="mt-2 mx-auto">{article.created}</p>
                        </div>
                        <div className={`flex flex-col w-2/3 pt-2`}>
                            <Link
                                className=""
                                key={article.id}
                                href={"/secret/[id]"}
                                as={`/secret/${article.id}`}
                            >
                                <li className={`font-bold text-xl ${patua} hover:text-orange-700 mt-2`}>{article.title}</li>
                            </Link>
                            <li className="text-md max-w-96 mt-3 break-words">{article.description}</li>
                        </div>
                    </ul>
                </div>
            ))}
            <div className="pagination mt-8">
              {articles.length > articlesPerPage && (
                  <ul className="flex space-x-2">
                      {Array(Math.ceil(articles.length / articlesPerPage)).fill().map((_, i) => (
                          <li key={i}>
                              <a
                                  onClick={() => paginate(i + 1)}
                                  href="#"
                                  className={`px-3 py-1 rounded-md text-orange-950 hover:bg-orange-800 hover:text-white ${currentPage === i + 1 ? 'bg-orange-800 text-white' : ''}`}
                              >
                                  {i + 1}
                              </a>
                          </li>
                      ))}
                  </ul>
              )}
            </div>
        </section>
    );
};

export default UserView;
