import React from "react";
import { Patua_One } from "next/font/google";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { pb } from "../(auth)/auth";
import Link from "next/link";
import Image from "next/image";

const patua = Patua_One({weight: '400', subsets: ['latin']});

const UserView = ({ session }) => {
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("user");
  const [articles, setArticles] = useState([
    {
      id: "",
      title: "",
      description: "",
      content: "",
      photo: "",
    },
  ]);

  const getArticles = async () => {
    try {
      const record = await pb.collection("articles").getFullList({
        sort: "-created",
      });

      const renderedArticles = record.map((article) => {
        const url = pb.files.getUrl(article, article.photo);
        console.log(url)
      return ({
        id: article.id,
        title: article.title,
        description: article.description,
        content: article.content,
        photo: url
      })});
      
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
    if(pb.authStore.model) setRole(pb.authStore.model.Role)
  }, [loggedIn]);

  return (
    <section className='flex flex-col max-w-1/2'>
      <h1 className="text-5xl">Noutati</h1>
      {articles.map((article, key) => (
          <div className="mx-auto min-w-[650px]" key={article.id}>
              <ul className="flex min-h-44 gap-5 mt-5 border-b py-2">
                <div className="flex w-1/3">
                  <Image src={`${article.photo}`} width={200} height={50} alt="postPhoto" className="bg-cover bg-center"/>
                </div>
                <div className={`flex flex-col w-2/3 pt-2 `}>
                  <Link
                    key={article.id}
                    href={"/secret/[id]"}
                    as={`/secret/${article.id}`}
                  >
                    <li className={`font-bold text-xl ${patua} hover:text-orange-700`}>{article.title}</li>
                  </Link>
                  <li className="text-md max-w-96">{article.description}</li>
                </div>
              </ul>
            {role === 'admin' ? <button className="place-self-end px-2 bg-red-500" onClick={() => deleteArticle(article.id)}>X</button> : null}
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
