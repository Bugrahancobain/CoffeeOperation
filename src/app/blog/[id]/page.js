// src/app/blog/[id].js
"use client";
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Doğru kütüphane
import { database } from '../../../../firebase';
import { ref, onValue } from 'firebase/database';
import './BlogDetail.css'; // CSS dosyasını ekleyin
import Footer from '@/app/components/Footer';
import "../../styles/Footer.css"

function BlogDetailPage() {
    const { id } = useParams(); // Dinamik id'yi al
    const [post, setPost] = useState(null); // Tekil yazı için state

    useEffect(() => {
        if (id) {
            const postRef = ref(database, `posts/${id}`);
            onValue(postRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    setPost({ id, ...data }); // Tekil yazıyı set et
                } else {
                    console.error('Post not found'); // Yazı bulunamazsa hata mesajı
                }
            });
        }
    }, [id]); // id değiştiğinde effect tetiklenir

    if (!post) return <div className="loading">Loading...</div>; // Veriler yüklenene kadar bekleme mesajı

    return (
        <div>
            <div className='blogDetailMain'>
                <div className='blogDetail'>
                    <h1 className='blogTitle'>{post.title}</h1>
                    <p className='blogContent'>{post.content}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BlogDetailPage;
