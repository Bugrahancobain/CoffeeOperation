"use client";
import React from "react";
import "./AdminNavbar.css";
import { useRouter } from "next/navigation"; // next/navigation'dan import ediyoruz
import { signOut } from "firebase/auth"; // Firebase Auth'tan signOut fonksiyonunu import ediyoruz
import { auth } from "../../../../firebase"; // Firebase yapılandırmasını import edin

function AdminNavbar() {
  const router = useRouter(); // next/navigation'dan gelen router

  // Çıkış yapma fonksiyonu
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Başarılı çıkış işlemi sonrasında login sayfasına yönlendir
        router.push("/login");
      })
      .catch((error) => {
        console.error("Çıkış yaparken bir hata oluştu:", error);
      });
  };

  const navigateTo = (page) => {
    router.push(page); // Belirtilen sayfaya yönlendir
  };

  return (
    <div className="sidebar AdminSideBar">
      <div>
        <h2>Admin Paneli</h2>
        <ul>
          <li className="sidebarLi" onClick={() => navigateTo("/admin/")}>
            Ürün Ayarları
          </li>
          <li
            className="sidebarLi"
            onClick={() => navigateTo("/admin/equipments")}
          >
            Ekipman Ayarları
          </li>
          <li
            className="sidebarLi"
            onClick={() => navigateTo("/admin/references")}
          >
            Referans Ayarları
          </li>
          <li className="sidebarLi" onClick={() => navigateTo("/admin/blog")}>
            Blog Ayarları
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="sidebarLi" onClick={() => navigateTo("/")}>
            Anasayfa
          </li>
          {/* Çıkış butonuna handleLogout fonksiyonu ekleniyor */}
          <li className="sidebarLi exitBtn" onClick={handleLogout}>
            Çıkış
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AdminNavbar;
