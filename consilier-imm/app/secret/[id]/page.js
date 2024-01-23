'use client'
import { useEffect, useState } from "react";
import { pb } from "@/app/(auth)/auth";
import Navbar from "@/app/components/Navbar";
import Topbar from "@/app/components/Topbar";

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
            <div>
                {articles.map((article, key) => (
                    <ul key={article.id}>
                        <li className="font-bold text-lg">{article.title}</li>
                        <li className="text-sm">{article.content}</li>
                    </ul>
                ))}
            </div>
        </div>
        </>
    );
}