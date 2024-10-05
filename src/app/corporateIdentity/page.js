import React from 'react';
import "../styles/CorporateIdentity.css"; // CSS dosyasını içe aktar
import Footer from '../components/Footer';
import Link from 'next/link';

function CorporateIdentityPage() {
    return (
        <div>
            <div className='corporateIdentityMain'>
                <div className="corporate-identity">
                    <h1>Kurumsal Kimlik: Markanızı Güçlendirin</h1>
                    <p>
                        Kahve dükkanınızın başarısının en önemli unsurlarından biri, güçlü bir kurumsal kimlik oluşturmaktır.
                        Markanız, müşteri zihninde oluşturduğunuz imaj ve sunduğunuz deneyim ile şekillenir. Bizler,
                        işletmenizin her yönünü kapsayan profesyonel kurumsal kimlik hizmetleri sunuyoruz.
                    </p>

                    <h2>Logo Tasarımı</h2>
                    <p>
                        Markanızın kimliğini yansıtan bir logo, potansiyel müşterilerin ilk izlenimini oluşturur. Tasarım
                        ekibimiz, iş modelinizi ve hedef kitlenizi göz önünde bulundurarak, özgün ve etkileyici bir logo
                        tasarlamak için sizinle birlikte çalışır. Logo, markanızın en önemli sembolüdür ve görsel kimliğinizi
                        belirler.
                    </p>

                    <h2>Menü Tasarımı</h2>
                    <p>
                        Menü tasarımı, müşteri deneyiminizi artırmak için hayati öneme sahiptir. Görsel olarak çekici bir
                        menü, ürünlerinizin öne çıkmasını sağlar ve müşteri tercihlerinde etkili olur. Menü tasarımında,
                        hem görsel estetiği hem de okunabilirliği göz önünde bulundurarak, markanızı en iyi şekilde
                        yansıtan bir tasarım oluşturuyoruz.
                    </p>

                    <h2>Web Sitesi Tasarımı</h2>
                    <p>
                        Günümüzde bir web sitesi, işletmenizin dijital vitrini haline gelmiştir. Kullanıcı dostu, estetik ve
                        mobil uyumlu bir web sitesi tasarımı ile markanızı çevrimiçi dünyada etkili bir şekilde temsil
                        ediyoruz. Web sitenizde sunmak istediğiniz hizmetleri, ürünleri ve markanızı en iyi şekilde
                        yansıtan bir içerik oluşturuyoruz.
                    </p>

                    <h2>Tabela ve Diğer Görsel Unsurlar</h2>
                    <p>
                        İşletmenizin dış cephesi, müşterilerinizi cezbetmenin en önemli yollarından biridir. Dikkat çekici
                        ve profesyonel bir tabela, işletmenizin görünürlüğünü artırır. Tabela tasarımında, markanızın
                        kimliğini yansıtan renkler, yazı karakterleri ve grafik unsurları kullanarak, etkileyici bir tasarım
                        oluşturuyoruz. Ayrıca, iç mekan tasarımı ve diğer görsel unsurlarla markanızın bütünlüğünü
                        sağlamaya yardımcı oluyoruz.
                    </p>

                    <h2>Sürekli Destek ve Danışmanlık</h2>
                    <p>
                        Kurumsal kimlik oluşturma sürecinizin her aşamasında yanınızdayız. Markanızın sürekli olarak
                        gelişmesini ve güncel kalmasını sağlamak için tasarımlarınızı düzenli olarak güncelleyebiliriz.
                        İhtiyaç duyduğunuz her an, uzman kadromuzla destek sunmaya hazırız.
                    </p>

                    <p>
                        Sonuç olarak, güçlü bir kurumsal kimlik oluşturmak, müşteri sadakati ve marka bilinirliği açısından
                        kritik öneme sahiptir. Bizimle iletişime geçin, markanızı güçlendirmek için gereken tüm desteği
                        sunalım!
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

export default CorporateIdentityPage;
