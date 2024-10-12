// src/app/blog/page.js
"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { database } from "../../../firebase";
import { ref, onValue } from "firebase/database";
import "../styles/Blog.css";
import Footer from "../components/Footer";

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const postsRef = ref(database, "posts");
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const postsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        console.log(postsArray); // postsArray'yi konsola yazdırın
        setPosts(postsArray);
      } else {
        console.error("No data available"); // Veri yoksa hata mesajı yazdırın
      }
    });
  }, []);

  return (
    <div className="blog">
      <div className="blogTitle">
        <h1>Blog</h1>
      </div>
      <div className="blogBox">
        {posts.map((post) => (
          <div
            key={post.id}
            className="blogImage"
            style={{ backgroundImage: `url(${post.imageUrl})` }}
            onClick={() => router.push(`/blog/${post.id}`)} // Yönlendirme
          >
            <span>{post.title}</span>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default BlogPage;
