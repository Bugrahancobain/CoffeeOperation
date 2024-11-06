import { ref, get } from "firebase/database";
import { database } from "../../../firebase";
import "../styles/Blog.css";
import Footer from "../components/Footer";
import BlogPosts from "../components/BlogPosts"; // Yeni oluşturduğumuz Client Component

export default async function BlogPage() {
  // Firebase'den verileri sunucu tarafında çekiyoruz
  let posts = [];

  try {
    const postsRef = ref(database, "posts");
    const snapshot = await get(postsRef); // Sunucu tarafında veri çekme işlemi
    const data = snapshot.val();

    if (data) {
      posts = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
    }
  } catch (error) {
    console.error("Veri çekme hatası:", error);
  }

  return (
    <div>
      <div className="blog">
        <div className="blogTitle">
          <h1>Blog</h1>
        </div>
        <BlogPosts posts={posts} /> {/* Client tarafına gönderiyoruz */}
      </div>
      <Footer />
    </div>
  );
}
