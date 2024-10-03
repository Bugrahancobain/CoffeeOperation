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
                <div className='servicesImage' style={{ backgroundImage: `url(${latte.src})` }}>
                    <span>Eğitim</span>
                </div>
                <div className='servicesImage' style={{ backgroundImage: `url(${danisman.src})` }}>
                    <span>Danışmanlık</span>
                </div>
                <div className='servicesImage' style={{ backgroundImage: `url(${architect.src})` }}>
                    <span>Mimari Destek</span>
                </div>
            </div>
            <div className='servicesLinkButtonDiv'>
                <Link className='servicesLinkButton' href="/services">TÜM HİZMETLERİMİZ</Link>
            </div>
        </div>
    )
}

export default Services