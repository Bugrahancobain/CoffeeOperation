import React from 'react'
import "../styles/Services.css"
import latte from "../../../public/latte.webp";
import danisman from "../../../public/danişman.webp";
import architect from "../../../public/architect.webp";
import coffeesupply from "../../../public/coffeesupply.webp";
import coffeeequitment from "../../../public/coffeeequitment.webp";
import kurumsalkimlik from "../../../public/kurumsalkimlik.webp";
import Footer from '../components/Footer';
import Link from 'next/link';

function page() {
    return (
        <div>
            <div className='services'>
                <div className="servicesTitle">
                    <h1>Hizmetlerimiz</h1>
                </div>
                <div className="servicesBox">
                    <Link href="/education" className='servicesPageImage' style={{ backgroundImage: `url(${latte.src})`, textAlign: "center" }}>
                        <p style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "30px" }}>Eğitim</p>
                        <p style={{ fontSize: "12px", margin: "auto", backgroundColor: "rgba(0,0,0,0.5)", height: "max-content", padding: "10px", height: "50%", overflow: "hidden" }}>Dünyanın en iyi ekipmanlarını ve çekirdeklerini kullansanız da kahve yapmayı bilmeyen bir baristanın elinden içeceğiniz kahve en hafif tanımlama ile sadece "kötü" olacaktır. Kahve eğitimleri ile ilgileniyorsanız doğru yerdesiniz.</p>
                    </Link>
                    <Link href="/consultancy" className='servicesPageImage' style={{ backgroundImage: `url(${danisman.src})` }}>
                        <p style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "30px" }}>Danışmanlık</p>
                        <p style={{ fontSize: "12px", margin: "auto", backgroundColor: "rgba(0,0,0,0.5)", height: "max-content", padding: "10px", height: "50%", overflow: "hidden" }}>Coffeeshop açmayı planlıyorsunuz fakat nereden başlayacağınızı bilmiyor musunuz? Fizibilite ve karlılık analizine ihtiyacınız mı var? Makine parkurumu nasıl seçmeliyim? Personelime nasıl eğitim verebilirim. Menümde hangi ürünler bulunmalı? Bunlara benzer cevabını bulamadığınız sorularınız...</p>
                    </Link>
                    <Link href="/corporateIdentity" className='servicesPageImage' style={{ backgroundImage: `url(${kurumsalkimlik.src})` }}>
                        <p style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "30px" }}>Kurumsal Kimlik</p>
                        <p style={{ fontSize: "12px", margin: "auto", backgroundColor: "rgba(0,0,0,0.5)", height: "max-content", padding: "10px", height: "50%", overflow: "hidden" }}>Kurumsal kimlik, kahve dükkanınızın markasını güçlendirmenin en önemli adımlarından biridir. Logo, menü tasarımı ve web sitesi gibi unsurların tutarlı bir konsepte göre hazırlanması, markanızı daha profesyonel ve akılda kalıcı kılar. Bu, müşterilerinizin güvenini kazanarak sadakat oluşturmada etkili bir rol oynar.</p>

                    </Link>
                </div>
                <div className="servicesBox">
                    <Link href="/architectureSupport" className='servicesPageImage' style={{ backgroundImage: `url(${architect.src})` }}>
                        <p style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "30px" }}>Mimari Destek</p>
                        <p style={{ fontSize: "12px", margin: "auto", backgroundColor: "rgba(0,0,0,0.5)", height: "max-content", padding: "10px", height: "50%", overflow: "hidden" }}>Kahve dükkanınızın mimari ve ekipman ihtiyaçlarını tek bir uzman tedarikçiyle çözmek, zaman ve maliyet avantajı sağlar. Kaliteli ekipman ve profesyonel mimari çözümler, işletmenizin hem estetik hem de işlevsel beklentilerini en iyi şekilde karşılar.</p>

                    </Link>

                    <Link href="/product" className='servicesPageImage' style={{ backgroundImage: `url(${coffeesupply.src})` }}>

                        <p style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "30px" }}>Ürün Tedariği</p>
                        <p style={{ fontSize: "12px", margin: "auto", backgroundColor: "rgba(0,0,0,0.5)", height: "max-content", padding: "10px", height: "50%", overflow: "hidden" }}>Coffeeshopunuzda ihtiyacınız olan ürünleri tek bir tedarikçiden temin etmek, lojistik yönetimi açısından işletmecilere büyük avantajlar sağlamaktadır. Bu noktada tedarikçinizin size sağladığı hizmet ve ürünler konusunda uzman olması işletmenizin ürün ve hizmet kalitesini de yükseltecektir.</p>

                    </Link>
                    <Link href="/equipment" className='servicesPageImage' style={{ backgroundImage: `url(${coffeeequitment.src})` }}>
                        <p style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "30px" }}>Ekipman Tedariği</p>
                        <p style={{ fontSize: "12px", margin: "auto", backgroundColor: "rgba(0,0,0,0.5)", height: "max-content", padding: "10px", height: "50%", overflow: "hidden" }}>Tüm ekipman ihtiyaçlarınızı tek bir tedarikçiden temin etmek, maliyetleri düşürür ve lojistiği kolaylaştırır. Uzman bir tedarikçiden alacağınız kaliteli ürünler, hem operasyonel verimliliği artırır hem de kahve dükkanınızın hizmet kalitesini yükseltir.</p>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page