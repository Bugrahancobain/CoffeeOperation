"use client";
import React, { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa"; // React-icons kullanarak menü simgesi

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null); // Menü öğesini referansla takip etmek için

    // Menü toggle işlemi
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Link tıklandığında menüyü kapat
    const closeMenu = () => {
        setIsOpen(false);
    };

    // Dışarıya tıklandığında menüyü kapat
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            closeMenu();
        }
    };

    useEffect(() => {
        // Dışarı tıklama event listener'ını ekle
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup function ile event listener'ı kaldır
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="navbar" ref={menuRef}>
            <div>
                <Link className="navbarLink" href="/" onClick={closeMenu}>
                    <Image
                        className="navbarImage"
                        src="/coffeeOperation.webp"
                        width={300}
                        height={200}
                        alt="CoffeeOperation"
                    />
                </Link>
            </div>
            <div className={`navbarLinks ${isOpen ? "active" : ""}`}>
                <Link className="navbarLink" href="/" onClick={closeMenu}>
                    Anasayfa
                </Link>
                <Link className="navbarLink" href="/about" onClick={closeMenu}>
                    Hakkımızda
                </Link>
                <Link className="navbarLink" href="/services" onClick={closeMenu}>
                    Hizmetlerimiz
                </Link>
                <Link className="navbarLink" href="/referances" onClick={closeMenu}>
                    Referanslarımız
                </Link>
                <Link className="navbarLink" href="/blog" onClick={closeMenu}>
                    Blog
                </Link>
                <Link className="navbarLink" href="/humanresources" onClick={closeMenu}>
                    Kariyer
                </Link>
                <Link className="navbarLink" href="/contact" onClick={closeMenu}>
                    İletişim
                </Link>
            </div>
            <div className="menuIcon" onClick={toggleMenu}>
                <FaBars size={30} color="white" />
            </div>
        </div>
    );
}

export default Navbar;
