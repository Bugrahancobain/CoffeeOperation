import React from 'react'
import "../styles/Services.css"
import latte from "../../../public/latte.webp";
import danisman from "../../../public/danişman.webp";
import architect from "../../../public/architect.webp";
import coffeesupply from "../../../public/coffeesupply.webp";
import coffeeequitment from "../../../public/coffeeequitment.webp";
import kurumsalkimlik from "../../../public/kurumsalkimlik.webp";
import Footer from '../components/Footer';

function page() {
    return (
        <div>
            <div className='services'>
                <div className="servicesTitle">
                    <h1>Hizmetlerimiz</h1>
                </div>
                <div className="servicesBox">
                    <div className='servicesPageImage' style={{ backgroundImage: `url(${latte.src})`, textAlign: "center" }}>
                        <span style={{ marginBottom: "200px" }}>Eğitim</span>
                        <br />
                        <br />
                        <br />
                        <p style={{ fontSize: "12px", width: "80%", margin: "auto" }}>Dünyanın en iyi ekipmanlarını ve çekirdeklerini kullansanız da kahve yapmayı bilmeyen bir baristanın elinden içeceğiniz kahve en hafif tanımlama ile sadece "kötü" olacaktır. Kahve eğitimleri ile ilgileniyorsanız doğru yerdesiniz.</p>
                    </div>
                    <div className='servicesPageImage' style={{ backgroundImage: `url(${danisman.src})` }}>
                        <span>Danışmanlık</span>
                        <br />
                        <br />
                        <br />
                        <p style={{ fontSize: "12px", width: "80%", margin: "auto" }}>Coffeeshop açmayı planlıyorsunuz fakat nereden başlayacağınızı bilmiyor musunuz? Fizibilite ve karlılık analizine ihtiyacınız mı var? Makine parkurumu nasıl seçmeliyim? Personelime nasıl eğitim verebilirim. Menümde hangi ürünler bulunmalı? Bunlara benzer cevabını bulamadığınız sorularınız...</p>
                    </div>
                    <div className='servicesPageImage' style={{ backgroundImage: `url(${kurumsalkimlik.src})` }}>
                        <span>Kurumsal Kimlik</span>
                        <br />
                        <br />
                        <br />
                        <p style={{ fontSize: "12px", width: "80%", margin: "auto" }}>Kurumsal kimlik, kahve dükkanınızın markasını güçlendirmenin en önemli adımlarından biridir. Logo, menü tasarımı ve web sitesi gibi unsurların tutarlı bir konsepte göre hazırlanması, markanızı daha profesyonel ve akılda kalıcı kılar. Bu, müşterilerinizin güvenini kazanarak sadakat oluşturmada etkili bir rol oynar.</p>

                    </div>
                </div>
                <div className="servicesBox">
                    <div className='servicesPageImage' style={{ backgroundImage: `url(${architect.src})` }}>
                        <span>Mimari Destek</span>
                        <br />
                        <br />
                        <br />
                        <p style={{ fontSize: "12px", width: "80%", margin: "auto" }}>Kahve dükkanınızın mimari ve ekipman ihtiyaçlarını tek bir uzman tedarikçiyle çözmek, zaman ve maliyet avantajı sağlar. Kaliteli ekipman ve profesyonel mimari çözümler, işletmenizin hem estetik hem de işlevsel beklentilerini en iyi şekilde karşılar.</p>

                    </div>
                    <div className='servicesPageImage' style={{ backgroundImage: `url(${coffeesupply.src})` }}>
                        <span>Ürün Tedariği</span>
                        <br />
                        <br />
                        <br />
                        <p style={{ fontSize: "12px", width: "80%", margin: "auto" }}>Coffeeshopunuzda ihtiyacınız olan ürünleri tek bir tedarikçiden temin etmek, lojistik yönetimi açısından işletmecilere büyük avantajlar sağlamaktadır. Bu noktada tedarikçinizin size sağladığı hizmet ve ürünler konusunda uzman olması işletmenizin ürün ve hizmet kalitesini de yükseltecektir.</p>

                    </div>
                    <div className='servicesPageImage' style={{ backgroundImage: `url(${coffeeequitment.src})` }}>
                        <span>Ekipman Tedariği</span>
                        <br />
                        <br />
                        <br />
                        <p style={{ fontSize: "12px", width: "80%", margin: "auto" }}>Tüm ekipman ihtiyaçlarınızı tek bir tedarikçiden temin etmek, maliyetleri düşürür ve lojistiği kolaylaştırır. Uzman bir tedarikçiden alacağınız kaliteli ürünler, hem operasyonel verimliliği artırır hem de kahve dükkanınızın hizmet kalitesini yükseltir.</p>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page