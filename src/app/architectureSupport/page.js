import React from 'react';
import "../styles/ArchitectureSupport.css"; // CSS dosyasını içe aktar
import Footer from '../components/Footer';
import Link from 'next/link';

function ArchitectureSupportPage() {
    return (
        <div>
            <div className='architectureSupportMain'>
                <div className="architecture-support">
                    <h1>Mimari Destek: İşletmenizi Güçlendirin</h1>
                    <p>
                        Kahve dükkanınızı kurarken ya da mevcut alanınızı yeniden tasarlarken, doğru mimari çözümler,
                        işletmenizin başarısında büyük rol oynar. İşlevsel ve estetik bir mekan, müşteri deneyimini artırır
                        ve markanızın imajını güçlendirir. Biz, size bu süreçte profesyonel mimari destek sunarak,
                        hayalinizdeki kahve dükkanını yaratmanıza yardımcı oluyoruz.
                    </p>

                    <h2>Alan Analizi</h2>
                    <p>
                        Başarılı bir tasarım süreci, alanın kapsamlı bir analizi ile başlar. Mekanın boyutları, mevcut yapı,
                        çevresel faktörler ve hedef kitleniz gibi unsurları değerlendirerek, ihtiyaçlarınıza en uygun
                        mimari çözümleri belirliyoruz. Böylece, mevcut alanınızı en verimli şekilde kullanmanızı
                        sağlıyoruz.
                    </p>

                    <h2>Fonksiyonel Tasarım</h2>
                    <p>
                        Müşteri akışını optimize etmek ve çalışanlarınız için işlevsel bir ortam oluşturmak, iyi bir mimari
                        tasarımın temelini oluşturur. Müşterilerinizi rahatça ağırlayabileceğiniz bir oturma düzeni, kafe
                        alanları ve hazırlık alanları gibi unsurları en iyi şekilde entegre ederek, işletmenizin
                        fonksiyonelliğini artırıyoruz.
                    </p>

                    <h2>Estetik ve Atmosfer</h2>
                    <p>
                        Kahve dükkanınızın atmosferi, müşteri deneyiminin en önemli bileşenlerinden biridir. Tasarım
                        sürecinde, mekanın genel havasını ve estetiğini göz önünde bulundurarak, uygun renk paletleri,
                        malzemeler ve dekoratif unsurlar seçiyoruz. Bu sayede, markanızı yansıtan, sıcak ve davetkar bir
                        ortam yaratıyoruz.
                    </p>

                    <h2>Uygulama Süreci</h2>
                    <p>
                        Tasarım aşamasının ardından, projeyi hayata geçirmek için gerekli olan uygulama sürecini
                        yönetiyoruz. Güvenilir ve deneyimli müteahhitlerle iş birliği yaparak, projenizin zamanında ve bütçe
                        dahilinde tamamlanmasını sağlıyoruz. Sürekli iletişim halinde kalarak, her aşamada sizinle
                        birlikte ilerliyoruz.
                    </p>

                    <h2>Yenilikçi Çözümler</h2>
                    <p>
                        Kahve dükkanınızı diğerlerinden farklı kılmak için yenilikçi tasarım çözümleri sunuyoruz.
                        Sürdürülebilirlik, enerji verimliliği ve modern mimari trendleri göz önünde bulundurarak, mekanınızı
                        hem estetik hem de işlevsel açıdan zenginleştiriyoruz. Yaratıcı ve pratik çözümlerimizle, markanızın
                        imajını güçlendiriyoruz.
                    </p>

                    <h2>Sürekli Destek</h2>
                    <p>
                        Mimari tasarım sürecinizin her aşamasında yanınızdayız. İşletmenizin ihtiyaçlarına göre, tasarımınızı
                        güncelleyebilir ve mevcut alanınızı en iyi şekilde kullanmanız için rehberlik yapabiliriz. Uzman
                        kadromuz, her zaman yanınızda.
                    </p>

                    <p>
                        Sonuç olarak, profesyonel mimari destek almak, işletmenizin başarısını artırmada büyük bir etkendir.
                        Hayalinizdeki kahve dükkanını yaratmak için bizimle iletişime geçin ve sürecin başlangıcını yapın!
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

export default ArchitectureSupportPage;
