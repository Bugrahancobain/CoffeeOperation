import React from 'react';
import "../styles/Consultancy.css"; // CSS dosyasını içe aktar
import Footer from '../components/Footer';
import Link from 'next/link';

function ConsultingPage() {
    return (
        <div>
            <div className='consultingMain'>
                <div className="coffee-consulting">
                    <h1>Danışmanlık Hizmetleri: Kahve Dükkanınızı Başarıya Taşıyın</h1>
                    <p>
                        Coffeeshop açmayı planlıyorsunuz fakat nereden başlayacağınızı bilmiyor musunuz? Fizibilite ve karlılık
                        analizine ihtiyacınız mı var? Makine parkurumu nasıl seçmeliyim? Personelime nasıl eğitim verebilirim?
                        Menümde hangi ürünler bulunmalı? Bunlara benzer cevabını bulamadığınız sorularınız varsa, doğru yerdesiniz!
                    </p>
                    <h2>Fizibilite ve Karlılık Analizi</h2>
                    <p>
                        Başarılı bir kahve dükkanı açmak için, detaylı bir fizibilite ve karlılık analizi yapılması şarttır.
                        Sektördeki trendleri, yerel pazarın dinamiklerini ve müşteri taleplerini analiz ederek, sizin için en
                        uygun iş modeli ve stratejilerini oluşturuyoruz. Bu sayede, yatırımınızı en verimli şekilde kullanmanızı
                        sağlıyoruz.
                    </p>
                    <h2>Makine Parkuru Seçimi</h2>
                    <p>
                        Doğru ekipman, başarılı bir kahve dükkanının temel taşlarındandır. İşletmenizin ihtiyaçlarına en uygun
                        makineleri belirlemenize yardımcı oluyor, kaliteli ürünler sunmanız için gereken tüm araç ve gereçleri en
                        iyi şekilde seçmenize destek veriyoruz. Maliyet analizi yaparak, en uygun maliyetle en yüksek kaliteyi
                        elde etmenizi sağlıyoruz.
                    </p>
                    <h2>Personel Eğitimi</h2>
                    <p>
                        Başarılı bir kahve dükkanının bir diğer önemli unsuru da eğitimli bir ekipten geçer. Barista eğitimleri,
                        müşteri hizmetleri ve ürün bilgisi konularında kapsamlı eğitim programları sunarak, personelinizin bilgi
                        ve becerilerini geliştirmesine yardımcı oluyoruz. Müşteri memnuniyetini artırmak için gereken tüm
                        yetkinlikleri kazandırıyoruz.
                    </p>
                    <h2>Menü Geliştirme</h2>
                    <p>
                        Menü, müşterilerinizi cezbetmenin en önemli yollarından biridir. Hedef kitlenizi ve pazar trendlerini
                        analiz ederek, çeşitli kahve türleri ve yan ürünler ile zenginleştirilmiş bir menü oluşturmanıza destek
                        oluyoruz. Sezonsal ürün önerileri ile menünüzü sürekli güncel tutarak, müşteri deneyimini zenginleştiriyoruz.
                    </p>
                    <h2>Sürekli Destek</h2>
                    <p>
                        Danışmanlık hizmetlerimiz, sadece işin başlangıcında değil, sürecin her aşamasında devam eder. İşletmenizin
                        gelişimine paralel olarak, ihtiyaç duyduğunuz her an destek sunmak için buradayız. Sektördeki yenilikleri
                        takip ederek, iş stratejilerinizi sürekli olarak güncel tutmanıza yardımcı oluyoruz.
                    </p>
                    <p>
                        Sonuç olarak, bizler kahve dükkanınızın her aşamasında yanınızdayız. Başarılı bir işletme kurma
                        yolculuğunuzda sizlere rehberlik etmek için sabırsızlanıyoruz. Danışmanlık hizmetlerimizle, hayallerinizi
                        gerçeğe dönüştürmek için gerekli olan tüm bilgi ve desteği sunuyoruz. Bizimle iletişime geçin, birlikte
                        başlatalım!
                    </p>
                    <div style={{ textAlign: "right", marginTop: "30px" }}>
                        <Link style={{ textDecoration: "none", color: "black", border: "1px solid black", borderRadius: "24px", padding: "10px" }} href="/services">Diğer Hizmetlerimiz</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ConsultingPage;
