"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../firebase";
import "../styles/Login.css"

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState(""); // Başarılı mesaj için state

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/admin"); // Giriş başarılı olursa admin sayfasına yönlendir
        } catch (error) {
            setError("Giriş bilgileri hatalı.");
        }
    };

    const handlePasswordReset = async () => {
        if (!email) {
            setError("Lütfen e-posta adresinizi girin.");
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Şifre sıfırlama bağlantısı e-posta adresinize gönderildi.");
            setError(""); // Hata varsa temizle
        } catch (error) {
            setError("Şifre sıfırlama sırasında bir hata oluştu. Lütfen e-posta adresinizi kontrol edin.");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h1>Giriş Yap</h1>
                <input
                    type="email"
                    placeholder="E-posta"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Şifre"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className="error-message">{error}</p>}
                {message && <p className="success-message">{message}</p>}
                <button type="submit" className="login-button">Giriş Yap</button>
                <button
                    type="button"
                    onClick={handlePasswordReset}
                    className="forgot-password-button"
                >
                    Şifremi Unuttum
                </button>
            </form>
        </div>
    );
}
