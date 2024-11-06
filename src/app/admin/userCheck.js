// hooks/useAuthRedirect.js

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // next/navigation kullanımı
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase"; // Firebase ayarlarınıza göre güncelleyin

export const useAuthRedirect = () => {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                router.push("/login"); // Giriş yapılmamışsa login sayfasına yönlendir
            }
            setLoading(false); // Kullanıcı durumu doğrulandı
        });

        return () => unsubscribe(); // Cleanup
    }, [router]);

    return { user, loading };
};
