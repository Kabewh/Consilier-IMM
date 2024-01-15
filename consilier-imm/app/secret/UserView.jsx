import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { pb } from "../(auth)/auth";
import Link from "next/link";

const UserView = ({ session }) => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [articles, setArticles] = useState([
    {
      id: "",
      title: "",
      description: "",
      content: "",
    },
  ]);

  const getArticles = async () => {
    try {
      const record = await pb.collection("articles").getFullList({
        sort: "-created",
      });

      const renderedArticles = record.map((article) => ({
        id: article.id,
        title: article.title,
        description: article.description,
        content: article.content,
      }));
      setArticles(renderedArticles);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };

  const deleteArticle = async (id) => {
    try {
      await pb.collection('articles').delete(id); 
      getArticles()
    } catch (e) {
      console.log(error)
    }
  }

  useEffect(() => {
    setLoggedIn(session);
  });

  useEffect(() => {
    getArticles();
  }, [loggedIn]);

  return (
    <section className="flex flex-col max-w-1/2 h-2/3">
      {articles.map((article, key) => (
          <div className="bg-zinc-100 border text-center p-3 w-1/4 flex flex-col" key={article.id}>
            <Link
                key={article.id}
                href={"/secret/[id]"}
                as={`/secret/${article.id}`}
            >
            <ul className="">
              <li className="font-bold text-lg">{article.title}</li>
              <li className="text-sm">{article.description}</li>
            </ul>
            </Link>
            <button className="place-self-end px-2 bg-red-500" onClick={() => deleteArticle(article.id)}>X</button>
          </div>
      ))}
      {loggedIn ? (
        <div className="hidden">
          <div className="m-auto bg-white rounded-lg w-80 h-64 flex shadow-lg">
            <p className="m-auto flex flex-col">
              <button onClick={() => router.push("/")}>X</button>
              <button onClick={() => router.push("/login")}>Login</button>
              <button onClick={() => router.push("/contact")}>
                Nu ai cont? Contactaza-ne!
              </button>
            </p>
          </div>
        </div>
      ) : (
        <div className="absolute bg-slate-200/75 inset-0 flex p-10">
          <div className="m-auto bg-white rounded-lg w-80 h-64 flex shadow-lg">
            <p className="m-auto flex flex-col">
              <button onClick={() => router.push("/")}>X</button>
              <button onClick={() => router.push("/login")}>Login</button>
              <button onClick={() => router.push("/contact")}>
                Nu ai cont? Contactaza-ne!
              </button>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default UserView;
