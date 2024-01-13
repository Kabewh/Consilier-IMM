'use client'
import { useEffect, useState } from "react";
import { pb } from "@/app/(auth)/auth";

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

    useEffect(() => {
        getArticles();
    }, []);


    return (
        <div>
            {articles.map((article) => (
                <>
                    <li className="font-bold text-lg">{article.title}</li>
                    <li className="text-sm">{article.content}</li>
                </>
            ))}
        </div>
    );
}