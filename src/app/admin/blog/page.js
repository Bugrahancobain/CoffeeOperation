"use client";
import React, { useState, useEffect } from "react";
import { ref, onValue, set, remove } from "firebase/database";
import { database } from "../../../../firebase";
import AdminNavbar from "../adminComponent/AdminNavbar";
import dynamic from "next/dynamic"; // Quill'i dinamik olarak yüklüyoruz
import "quill/dist/quill.snow.css";
import "./blogAdmin.css";
import { useAuthRedirect } from "../userCheck";


// Quill'i dinamik olarak, sunucu tarafında render edilmeden yükleyelim
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), { ssr: false });

function Page() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [expandedPostId, setExpandedPostId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPostId, setEditingPostId] = useState(null);
  const { user, loading } = useAuthRedirect();

  useEffect(() => {
    const postsRef = ref(database, "posts");
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedPosts = Object.entries(data).map(([id, post]) => ({
          id,
          ...post,
        }));
        setPosts(loadedPosts);
      }
    });
  }, []);

  // Quill'i istemci tarafında kullanmak için dinamik yükleme yapıldı
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPostRef = ref(database, "posts/" + new Date().getTime());
    set(newPostRef, {
      title,
      imageUrl,
      content,
    })
      .then(() => {
        setTitle("");
        setImageUrl("");
        setContent("");
      })
      .catch((error) => {
        console.error("Blog yazısı eklenirken hata oluştu: ", error);
      });
  };

  if (loading) {
    return <p>Yükleniyor...</p>; // Kullanıcı doğrulama sırasında yükleniyor ekranı gösterin
  }

  if (!user) {
    return null; // Eğer kullanıcı doğrulanmadıysa hiçbir şey göstermeyin (zaten yönlendiriliyor)
  }

  const handleDelete = (postId) => {
    const postRef = ref(database, "posts/" + postId);
    remove(postRef)
      .then(() => {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      })
      .catch((error) => {
        console.error("Silme işlemi başarısız:", error);
      });
  };

  const togglePost = (id) => {
    setExpandedPostId(expandedPostId === id ? null : id);
  };

  const toggleEdit = (post) => {
    if (isEditing && editingPostId === post.id) {
      setIsEditing(false);
      setEditingPostId(null);
      setTitle("");
      setImageUrl("");
      setContent("");
    } else {
      setIsEditing(true);
      setEditingPostId(post.id);
      setTitle(post.title);
      setImageUrl(post.imageUrl);
      setContent(post.content);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const postRef = ref(database, "posts/" + editingPostId);
    set(postRef, {
      title,
      imageUrl,
      content,
    })
      .then(() => {
        setIsEditing(false);
        setEditingPostId(null);
        setTitle("");
        setImageUrl("");
        setContent("");
      })
      .catch((error) => {
        console.error("Güncelleme sırasında hata:", error);
      });
  };

  return (
    <div className="container">
      <AdminNavbar />
      <div className="mainContent">
        <h1>Blog Yönetim Paneli</h1>
        <form onSubmit={isEditing ? handleUpdate : handleSubmit}>
          <input
            style={{ borderRadius: "4px" }}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Başlık"
            required
          />
          <input
            style={{ borderRadius: "4px" }}
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Resim URL'si"
            required
          />
          {/* Dinamik olarak Quill editörü burada yükleniyor */}
          <QuillNoSSRWrapper
            value={content}
            onChange={setContent}
            theme="snow"
            style={{ height: "300px" }}
          />
          <button type="submit">{isEditing ? "Düzenle" : "Ekle"}</button>
        </form>

        <div className="postsList">
          {posts.map((post) => (
            <div
              key={post.id}
              className="postItem"
              style={{ backgroundImage: `url(${post.imageUrl})` }}
            >
              <h3 onClick={() => togglePost(post.id)}>{post.title}</h3>
              {expandedPostId === post.id && (
                <div className="postContent">
                  <div dangerouslySetInnerHTML={{ __html: post.content }} />
                  <button onClick={() => handleDelete(post.id)}>Sil</button>
                  <button onClick={() => toggleEdit(post)}>Düzenle</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
