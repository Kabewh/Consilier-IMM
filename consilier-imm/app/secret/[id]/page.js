'use client'
import { useEffect, useState } from "react";
import { pb } from "@/app/(auth)/auth";
import Navbar from "@/app/components/Navbar";
import Topbar from "@/app/components/Topbar";
import parse from 'html-react-parser';

export default function Posts({ params }) {
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
            const record = await pb.collection('articles').getList(1, 50, {
                filter: `id = '${params.id}'`,
            });
            setArticles(record.items);
        } catch (error) {
            console.error("Error fetching articles:", error);
        }
    };

    useEffect(() => {
        getArticles();
    }, []);


    return (
        <>
        <Topbar/>
        <div className="h-screen">
        <Navbar/>
            <div className="max-w-screen-xl mx-auto bg-white shadow-md mt-1 h-[88vh]">
                <div className="p-10">
                    {articles.map((article, key) => (
                        <ul key={article.id}>
                            <li className="font-bold text-2xl break-words">{article.title}</li>
                            <li className="text-sm">{parse(article.content)}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}