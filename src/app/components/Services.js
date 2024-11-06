import React from 'react'
import "../styles/Services.css"
import latte from "../../../public/latte.webp";
import danisman from "../../../public/danişman.webp";
import architect from "../../../public/architect.webp";
import Link from 'next/link';

function Services() {
    return (
        <div className='services'>
            <div className="servicesTitle">
                <h1>Hizmetlerimiz</h1>
            </div>
            <div className="servicesBox">
                <Link href="/education" className='servicesImage' style={{ backgroundImage: `url(${latte.src})`, textAlign: "center" }}>
                    <p style={{ marginBottom: "200px", backgroundColor: "rgba(0,0,0,0.5)", padding: "30px" }}>Eğitim</p>
                    <br />
                    <br />
                    <br />
                </Link>
                <Link href="/consultancy" className='servicesImage' style={{ backgroundImage: `url(${danisman.src})` }}>
                    <p style={{ marginBottom: "200px", backgroundColor: "rgba(0,0,0,0.5)", padding: "30px" }}>Danışmanlık</p>
                    <br />
                    <br />
                    <br />
                </Link>
                <Link href="/architectureSupport" className='servicesImage' style={{ backgroundImage: `url(${architect.src})` }}>
                    <p style={{ marginBottom: "200px", backgroundColor: "rgba(0,0,0,0.5)", padding: "30px" }}>Mimari Destek</p>
                    <br />
                    <br />
                    <br />

                </Link>
            </div>
            <div className='servicesLinkButtonDiv'>
                <Link className='servicesLinkButton' href="/services">TÜM HİZMETLERİMİZ</Link>
            </div>
        </div>
    )
}

export default Services