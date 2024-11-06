"use client"; // Bu bileşeni client-side olarak işaretliyoruz
import React from "react";
import { useRouter } from "next/navigation";

export default function BlogPosts({ posts }) {
    const router = useRouter();

    return (
        <div className="blogBox">
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="blogImage"
                    style={{ backgroundImage: `url(${post.imageUrl})` }}
                    onClick={() => router.push(`/blog/${post.id}`)} // Yönlendirme işlemi client-side'da yapılıyor
                >
                    <p
                        style={{
                            backgroundColor: "rgba(0,0,0,0.5)",
                            padding: "30px",
                            fontSize: "20px",
                        }}
                    >
                        {post.title}
                    </p>
                </div>
            ))}
        </div>
    );
}
