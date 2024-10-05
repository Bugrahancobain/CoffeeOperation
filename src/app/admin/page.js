"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // next/navigation'dan import ediyoruz
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase"; // firebase.js dosyasından auth'u import ediyoruz

export default function Admin() {
    const router = useRouter(); // next/navigation'dan gelen router
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                router.push("/login"); // Kullanıcı yoksa login sayfasına yönlendir
            } else {
                setLoading(false); // Kullanıcı varsa yükleme bitiyor
            }
        });

        return () => unsubscribe(); // Temizleme işlemi
    }, [router]);

    if (loading) {
        return <div>Loading...</div>; // Yükleme ekranı
    }

    return (
        <div>
            <h1>Admin Panel</h1>
            {/* Admin panel içeriği */}
        </div>
    );
}
