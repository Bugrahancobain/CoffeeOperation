import Image from 'next/image'
import React from 'react'
import aboutBanner from "../../../public/aboutBanner.webp"
import "../styles/AboutPage.css"
import Footer from '../components/Footer'


function about() {
    return (
        <div className='aboutMain'>
            <div>
                <h1>Hakkımızda</h1>
                <p>Amacımız kahve tutkunlarına ve profesyonellerine, günden güne gelişen nitelikli kahve kavramı içerisinde bulunan bilgi, ürün ve hizmetleri sunmaktır.</p>
                <Image className='aboutBannerImage' quality={100} src={aboutBanner} alt="aboutBanner" />
                <p>2017 yılında kurulmuş genç bir şirket olarak, dünya üzerinde nitelikli kahve ile ilgili tüm regülasyonları düzenleyen Specialty Coffee Association (SCA) kalite ve bilgi standartlarını 7 yıllık bilgi ve tecrübemizle birleştirerek, paydaşlarımıza, nitelikli kahve ile ilgili olan her alanda bir tedarikçiden çok bir çözüm ortağı olarak hareket ediyoruz.</p>
            </div>
            <Footer />
        </div>
    )
}

export default about