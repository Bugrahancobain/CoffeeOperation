// src/app/blog/[id]/page.js
import React from "react";
import { database } from "../../../../firebase";
import { ref, get } from "firebase/database";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import "../../styles/Footer.css";
import "./BlogDetail.css";

async function getPostData(id) {
  const postRef = ref(database, `posts/${id}`);
  const snapshot = await get(postRef);

  if (snapshot.exists()) {
    return { id, ...snapshot.val() };
  } else {
    throw new Error("Post not found");
  }
}

export default async function BlogDetailPage({ params }) {
  const { id } = params;
  let post;

  try {
    post = await getPostData(id);
  } catch (error) {
    console.error(error);
    post = null;
  }

  if (!post) return <div className="loading">Loading...</div>;

  return (
    <div>
      <div className="blogDetailMain">
        <div className="blogDetail">
          <h1 className="blogTitle">{post.title}</h1>
          <p
            className="blogContent"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></p>
          <div style={{ textAlign: "right", marginTop: "30px" }}>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                border: "1px solid black",
                borderRadius: "24px",
                padding: "10px",
              }}
              href="/blog"
            >
              Diğer Yazılarımız
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
