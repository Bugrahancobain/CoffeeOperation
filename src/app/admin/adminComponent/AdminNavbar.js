"use client";
import React from 'react'
import "./AdminNavbar.css"
import { useRouter } from "next/navigation"; // next/navigation'dan import ediyoruz


function AdminNavbar() {
    const navigateTo = (page) => {
        router.push(page); // Belirtilen sayfaya yönlendir
    };
    const router = useRouter(); // next/navigation'dan gelen router

    return (
        <div className="sidebar AdminSideBar">
            <div>
                <h2>Admin Paneli</h2>
                <ul>

                    <li className="sidebarLi" onClick={() => navigateTo("/admin/")}>Ürün Ayarları</li>
                    <li className="sidebarLi" onClick={() => navigateTo("/admin/equipments")}>Ekipman Ayarları</li>
                    <li className="sidebarLi" onClick={() => navigateTo("/admin/references")}>Referans Ayarları</li>
                    <li className="sidebarLi" onClick={() => navigateTo("/admin/blog")}>Blog Ayarları</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li className="sidebarLi" onClick={() => navigateTo("/")}>Anasayfa</li>
                    <li className="sidebarLi exitBtn" onClick={() => navigateTo("/login")}>Çıkış</li>

                </ul>
            </div>

        </div>
    )
}

export default AdminNavbar