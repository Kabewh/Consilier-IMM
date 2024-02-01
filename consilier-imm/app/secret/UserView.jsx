import React, { useState, useEffect } from "react";
import { Patua_One } from "next/font/google";
import { useRouter } from "next/navigation";
import { pb } from "../(auth)/auth";
import Link from "next/link";
import Image from "next/image";
import Post from "../components/Post";

const patua = Patua_One({ weight: '400', subsets: ['latin'] });

const UserView = ({ session }) => {
    const router = useRouter();
    const [loggedIn, setLoggedIn] = useState(false);
    
    const [articles, setArticles] = useState([]);

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
    }, [loggedIn]);

    return (
        <section className={`grid grid-cols-3 space-y-5 mb-5 ${patua.className}`}>
            <div className='col-span-3 text-center text-3xl'>Informatii juridice</div>
            {articles.map((article, key) => (
                <Post key={key} photo={article.photo} title={article.title} description={article.description} id={article.id} date={article.created} deleteArticle={() => deleteArticle(article.id)} />
            ))}
        </section>

    );
};

export default UserView;
