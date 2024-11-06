"use client";
import React from 'react';
import "../styles/Resources.css";
import emailjs from 'emailjs-com';
import Footer from '../components/Footer';

// EmailJS'yi init et
emailjs.init('zIQlNA5cRr2I2AzmV');

function page() {
    const handleJobSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            surname: e.target.surname.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            brandname: e.target.brandname.value,
            pozition: e.target.pozition.value,
            city: e.target.city.value,
            carieer: e.target.carieer.value,
        };

        // İş başvurusu formunu gönderme
        sendEmail(formData, "template_87yjdwl");
    };

    const handleHumanSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            surname: e.target.surname.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            brandname: e.target.brandname.value,
            pozition: e.target.pozition.value,
            city: e.target.city.value,
            carieer: e.target.carieer.value,
        };

        // İşveren desteği formunu gönderme
        sendEmail(formData, "template_87yjdwl");
    };

    const sendEmail = (formData, templateId) => {
        emailjs.send("service_va6xi8m", templateId, {
            name: formData.name,
            surname: formData.surname,
            email: formData.email,
            phone: formData.phone,
            brandname: formData.brandname,
            pozition: formData.pozition,
            city: formData.city,
            carieer: formData.carieer
        }).then(response => {
            alert("Mesaj başarıyla gönderildi!");
        }).catch(error => {
            alert("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
        });
    };

    return (
        <div>
            <div className='resourcesPage'>
                <div className='resourcesPageMain' style={{ marginTop: 0 }}>
                    <div className='resourcesPageText'>
                        <h2>Pozisyon Arayışı!</h2>
                    </div>
                    <div className='resourcesPageForm'>
                        <form id="resourcesPageForm" onSubmit={handleJobSubmit}>
                            <div className='resourcesPageDiv'>
                                <div className='resourcesPageContext'>
                                    <label htmlFor="name">İsim*</label>
                                    <input
                                        style={{ borderRadius: "4px" }} type="text" id="name" name="name" required />
                                </div>
                                <div className='resourcesPageContext'>
                                    <label htmlFor="surname">Soyisim*</label>
                                    <input
                                        style={{ borderRadius: "4px" }} type="text" id="surname" name="surname" required />
                                </div>
                            </div>
                            <div className='resourcesPageDiv'>
                                <div className='resourcesPageContext'>
                                    <label htmlFor="email">E-Posta*</label>
                                    <input
                                        style={{ borderRadius: "4px" }} type="email" id="email" name="email" required />
                                </div>
                                <div className='resourcesPageContext'>
                                    <label htmlFor="phone">Telefon*</label>
                                    <input
                                        style={{ borderRadius: "4px" }} type="tel" id="phone" name="phone" required />
                                </div>
                            </div>
                            <div className='resourcesPageDiv'>
                                <div className='resourcesPageContext'>
                                    <label htmlFor="brandname">Doğum Tarihi*</label>
                                    <input
                                        style={{ borderRadius: "4px" }} type="text" id="brandname" name="brandname" required />
                                </div>
                                <div className='resourcesPageContext'>
                                    <label htmlFor="pozition">Başvurulan Pozisyon*</label>
                                    <input
                                        style={{ borderRadius: "4px" }} type="text" id="pozition" name="pozition" required />
                                </div>
                            </div>
                            <div className='resourcesPageDivv'>
                                <div className='resourcesPageContext'>
                                    <label htmlFor="city">Bulunduğunuz Şehir*</label>
                                    <input
                                        style={{ borderRadius: "4px" }} type="text" id="city" name="city" required />
                                </div>
                                <div className='resourcesPageContext'>
                                    <label htmlFor="carieer">İş Tecrübeleriniz*</label>
                                    <textarea style={{ borderRadius: "4px" }} placeholder='Mesajınızı Buraya Yazabilirsiniz.' id="carieer" name="carieer" required></textarea>
                                </div>
                            </div>
                            <div className='resourcesPageBtnDiv'>
                                <button type="submit" className='resourcesPageBtn'>Gönder</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='resourcesPageMain'>
                    <div className='resourcesPageText'>
                        <h2>İşveren Desteği!</h2>
                    </div>
                    <div className='resourcesPageForm'>
                        <form id="resourcesPageForm" onSubmit={handleHumanSubmit}>
                            <div className='resourcesPageDiv'>
                                <div className='resourcesPageContext'>
                                    <label htmlFor="name">Yetkili İsim*</label>
                                    <input
                                        style={{ borderRadius: "4px" }} type="text" id="name" name="name" required />
                                </div>
                                <div className='resourcesPageContext'>
                                    <label htmlFor="surname">Yetkili Soyisim*</label>
                                    <input
                                        style={{ borderRadius: "4px" }} type="text" id="surname" name="surname" required />
                                </div>
                            </div>
                            <div className='resourcesPageDiv'>
                                <div className='resourcesPageContext'>
                                    <label htmlFor="email">E-Posta*</label>
                                    <input
                                        style={{ borderRadius: "4px" }} type="email" id="email" name="email" required />
                                </div>
                                <div className='resourcesPageContext'>
                                    <label htmlFor="phone">Telefon*</label>
                                    <input
                                        style={{ borderRadius: "4px" }} type="tel" id="phone" name="phone" required />
                                </div>
                            </div>
                            <div className='resourcesPageDiv'>
                                <div className='resourcesPageContext'>
                                    <label htmlFor="brandname">İşletme İsmi*</label>
                                    <input
                                        style={{ borderRadius: "4px" }} type="text" id="brandname" name="brandname" required />
                                </div>
                                <div className='resourcesPageContext'>
                                    <label htmlFor="pozition">Aranan Pozisyon*</label>
                                    <input
                                        style={{ borderRadius: "4px" }} type="text" id="pozition" name="pozition" required />
                                </div>
                            </div>
                            <div className='resourcesPageDivv'>
                                <div className='resourcesPageContext'>
                                    <label htmlFor="city">Bulunduğunuz Şehir*</label>
                                    <input
                                        style={{ borderRadius: "4px" }} type="text" id="city" name="city" required />
                                </div>
                                <div className='resourcesPageContext'>
                                    <label htmlFor="carieer">Belirtmek istediğiniz diğer konular*</label>
                                    <textarea style={{ borderRadius: "4px" }} placeholder='Mesajınızı Buraya Yazabilirsiniz.' id="carieer" name="carieer" required></textarea>
                                </div>
                            </div>
                            <div className='resourcesPageBtnDiv'>
                                <button type="submit" className='resourcesPageBtn'>Gönder</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default page;
