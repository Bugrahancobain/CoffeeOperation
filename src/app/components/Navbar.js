import React from 'react'
import "../styles/Navbar.css"
import Link from 'next/link'
import CoffeeOperation from "../../../public/coffeeOperation.jpeg";
import Image from 'next/image';

function Navbar() {
    return (
        <div className='navbar'>
            <div>
                <Link className='navbarLink' href="/">
                    <Image className='navbarImage' src="/coffeeOperation.jpeg" width={300} height={200} alt=" CoffeeOperation" />
                </Link>
            </div>
            <div className='navbarLinks'>
                <Link className='navbarLink' href="/">Anasayfa</Link>
                <Link className='navbarLink' href="/about">Hakkımızda</Link>
                <Link className='navbarLink' href="/services">Hizmetlerimiz</Link>
                <Link className='navbarLink' href="/referances">Referanslarımız</Link>
                <Link className='navbarLink' href="/blog">Blog</Link>
                <Link className='navbarLink' href="/humanresources">Kariyer</Link>
                <Link className='navbarLink' href="/contact">İletişim</Link>
            </div>
        </div>
    )
}

export default Navbar