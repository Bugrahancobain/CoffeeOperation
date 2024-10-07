"use client";
import React, { useState, useEffect } from 'react';
import { ref, onValue, set, remove } from "firebase/database";
import { database } from '../../../../firebase'; // Firebase ayarlarını buraya ekleyin
import AdminNavbar from '../adminComponent/AdminNavbar';
import 'quill/dist/quill.snow.css'; // Quill stil dosyası
import './blogAdmin.css'; // Blog yönetim stil dosyası
import Quill from 'quill'; // Quill bileşeni burada içe aktarılıyor

function Page() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [content, setContent] = useState('');
    const [expandedPostId, setExpandedPostId] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editingPostId, setEditingPostId] = useState(null);
    const [quill, setQuill] = useState(null); // Quill'i state olarak tanımlıyoruz

    useEffect(() => {
        const postsRef = ref(database, 'posts');
        onValue(postsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const loadedPosts = Object.entries(data).map(([id, post]) => ({ id, ...post }));
                setPosts(loadedPosts);
            }
        });
    }, []);

    useEffect(() => {
        const quillInstance = new Quill('#editor', {
            theme: 'snow',
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['blockquote', 'code-block'],
                    ['link', 'image', 'video', 'formula'],
                    [{ 'header': 1 }, { 'header': 2 }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'align': [] }],
                    ['clean']
                ]
            }
        });

        quillInstance.on('text-change', () => {
            setContent(quillInstance.root.innerHTML);
        });

        setQuill(quillInstance); // Quill'i state'e kaydediyoruz

        return () => {
            quillInstance.enable(false); // Editörü devre dışı bırak
        };
    }, []); // Burada boş bağımlılık dizisi vererek sadece bir kez çalışmasını sağlıyoruz

    // Yeni blog yazısı ekleme
    const handleSubmit = (e) => {
        e.preventDefault(); // Formun varsayılan gönderimini engelle

        const newPostRef = ref(database, 'posts/' + new Date().getTime()); // Özgün anahtar oluştur
        set(newPostRef, {
            title,
            imageUrl,
            content,
        }).then(() => {
            // Başarılı ekleme sonrası formu sıfırlama
            setTitle(''); // Başlık alanını sıfırla
            setImageUrl(''); // Resim URL'si alanını sıfırla
            if (quill) {
                quill.setContents([]); // Quill editöründeki içeriği sıfırla
            }
        }).catch((error) => {
            console.error("Blog yazısı eklenirken hata oluştu: ", error);
        });
    };

    const handleDelete = (postId) => {
        const postRef = ref(database, 'posts/' + postId);
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
            setTitle('');
            setImageUrl('');
            setContent('');
            if (quill) {
                quill.setContents([]); // Quill içeriğini sıfırla
            }
        } else {
            setIsEditing(true);
            setEditingPostId(post.id);
            setTitle(post.title);
            setImageUrl(post.imageUrl);
            setContent(post.content);
            if (quill) {
                quill.root.innerHTML = post.content; // Quill içeriğini yükle
            }
        }
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const postRef = ref(database, 'posts/' + editingPostId);
        set(postRef, {
            title,
            imageUrl,
            content,
        }).then(() => {
            setIsEditing(false);
            setEditingPostId(null);
            setTitle('');
            setImageUrl('');
            setContent('');
            if (quill) {
                quill.setContents([]); // Düzenleme sonrası Quill içeriğini sıfırla
            }
        }).catch((error) => {
            console.error("Güncelleme sırasında hata:", error);
        });
    };

    return (
        <div className='container'>
            <AdminNavbar />
            <div className='mainContent'>
                <h1>Blog Yönetim Paneli</h1>
                <form onSubmit={isEditing ? handleUpdate : handleSubmit}>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Başlık"
                        required
                    />
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        placeholder="Resim URL'si"
                        required
                    />
                    <div id="editor" style={{ height: '300px' }}></div>
                    <button type="submit">{isEditing ? 'Düzenle' : 'Ekle'}</button>
                </form>

                <div className="postsList">
                    {posts.map((post) => (
                        <div key={post.id} className="postItem" style={{ backgroundImage: `url(${post.imageUrl})` }}>
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
