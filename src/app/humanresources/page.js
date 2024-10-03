"use client";
import React from 'react';
import "../styles/ContactPage.css";
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
            subject: e.target.subject.value,
            message: e.target.message.value
        };

        // EmailJS ile verileri gönderme
        sendEmail(formData);
    };
    const handleHumanSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            surname: e.target.surname.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            subject: e.target.subject.value,
            message: e.target.message.value
        };

        // EmailJS ile verileri gönderme
        sendEmail(formData);
    };

    const sendEmail = (formData) => {
        emailjs.send("service_va6xi8m", "template_bef99fe", {
            name: formData.name,
            surname: formData.surname,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message
        }).then(response => {
            alert("Mesaj başarıyla gönderildi!");
        }).catch(error => {
            alert("Mesaj gönderilemedi. Lütfen tekrar deneyin.");
        });
    };
    return (
        <div>
            <div className='contactPageMain' style={{ marginTop: 0 }}>
                <div className='contactPageText'>
                    <h1>İş Arıyorum!</h1>
                    <p>Yanda bulunan formu doldurup iş başvurusunda bulunabilirsiniz.</p>
                </div>
                <div className='contactPageForm'>
                    <form id="contactPageForm" onSubmit={handleJobSubmit}>
                        <div className='contactPageDiv'>
                            <div className='contactPageContext'>
                                <label htmlFor="name">İsim*</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className='contactPageContext'>
                                <label htmlFor="surname">Soyisim*</label>
                                <input type="text" id="surname" name="surname" required />
                            </div>
                        </div>
                        <div className='contactPageDiv'>
                            <div className='contactPageContext'>
                                <label htmlFor="email">E-Posta*</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className='contactPageContext'>
                                <label htmlFor="phone">Telefon*</label>
                                <input type="tel" id="phone" name="phone" required />
                            </div>
                        </div>
                        <div className='contactPageDiv'>
                            <div className='contactPageContext'>
                                <label htmlFor="number">Doğum Tarihi*</label>
                                <input type="number" id="age" name="age" required />
                            </div>
                            <div className='contactPageContext'>
                                <label htmlFor="text">Başvurulan Pozisyon*</label>
                                <input type="text" id="pozition" name="pozition" required />
                            </div>
                        </div>
                        <div className='contactPageDivv'>
                            <div className='contactPageContext'>
                                <label htmlFor="city">Bulunduğunuz Şehir*</label>
                                <input type="text" id="city" name="city" required />
                            </div>
                            <div className='contactPageContext'>
                                <label htmlFor="carieer">İş Tecrübeleriniz*</label>
                                <textarea placeholder='Mesajınızı Buraya Yazabilirsiniz.' id="carieer" name="carieer" required></textarea>
                            </div>
                        </div>
                        <div className='contactPageBtnDiv'>
                            <button type="submit" className='contactPageBtn'>Gönder</button>
                        </div>
                    </form>
                </div>

            </div><div className='contactPageMain' style={{ marginTop: 0, backgroundColor: "rgba(254,231,174,255)", color: "black" }}>
                <div className='contactPageText'>
                    <h1>Eleman Arıyorum!</h1>
                    <p>Yanda bulunan formu doldurup eleman arayışında bulunabilirsiniz.</p>
                </div>
                <div className='contactPageForm'>
                    <form id="contactPageForm" onSubmit={handleHumanSubmit}>
                        <div className='contactPageDiv'>
                            <div className='contactPageContext'>
                                <label htmlFor="name">Yetkili İsim Soyisim*</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className='contactPageContext'>
                                <label htmlFor="city">Bulunduğunuz Şehir*</label>
                                <input type="text" id="city" name="city" required />
                            </div>
                        </div>
                        <div className='contactPageDiv'>
                            <div className='contactPageContext'>
                                <label htmlFor="email">E-Posta*</label>
                                <input type="email" id="email" name="email" required />
                            </div>
                            <div className='contactPageContext'>
                                <label htmlFor="phone">Telefon*</label>
                                <input type="tel" id="phone" name="phone" required />
                            </div>
                        </div>
                        <div className='contactPageDiv'>
                            <div className='contactPageContext'>
                                <label htmlFor="name">İşetme İsmi*</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div className='contactPageContext'>
                                <label htmlFor="text">Aranan Pozisyon*</label>
                                <input type="text" id="pozition" name="pozition" required />
                            </div>
                        </div>
                        <div className='contactPageDivv'>
                            <div className='contactPageContext'>
                                <label htmlFor="city">Bulunduğunuz Şehir*</label>
                                <input type="text" id="city" name="city" required />
                            </div>
                            <div className='contactPageContext'>
                                <label htmlFor="message">Belirtmek istediğiniz diğer konular*</label>
                                <textarea placeholder='Mesajınızı Buraya Yazabilirsiniz.' id="message" name="message" required></textarea>
                            </div>
                        </div>
                        <div className='contactPageBtnDiv'>
                            <button type="submit" className='contactPageBtn' style={{ backgroundColor: "rgba(69,104,61,255)", color: "white" }}>Gönder</button>
                        </div>
                    </form>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default page