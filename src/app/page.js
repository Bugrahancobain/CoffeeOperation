import React from 'react';
import Image from 'next/image';
import CoffeeOperationBanner from "../../public/coffeOperationBannerImage.webp";
import "./styles/HomePage.css";
import Footer from './components/Footer';
import WhyCoffeOp from './components/WhyCoffeOp';
import Services from './components/Services';
import Products from './components/Products';
import Contact from './components/Contact';
import Referances from './components/Referances';
import Participations from './components/Participations';

export default function HomePage() {
  return (
    <div className='homePage'>
      <div className="banner">
        <Image className='bannerImage' src={CoffeeOperationBanner} alt="CoffeeOperationBanner" layout="fill" objectFit="cover" />
        <div className="bannerText">
          <div>İYİ KAHVE</div>
          <div>Doğru bilgi</div>
          <div>Doğru ürün</div>
          <div>Doğru uygulama</div>
        </div>
      </div>
      <WhyCoffeOp />
      <Services />
      <Products />
      <Referances />
      <Participations />
      <Contact />
      <Footer />
    </div>
  );
}
