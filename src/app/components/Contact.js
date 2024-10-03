"use client";
import React from 'react';
import "../styles/Contact.css";
import emailjs from 'emailjs-com';

// EmailJS'yi init et
emailjs.init('zIQlNA5cRr2I2AzmV');

function Contact() {

    const handleSubmit = (e) => {
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
        <div className='contactMain'>
            <div className='contactText'>
                <h1>Bize Ulaşın</h1>
                <p>Nitelikli kahve ile ilgili her türlü konuda bize ulaşabilirsiniz.</p>
                <p>info@coffeoperation.com</p>
                <p>+90 530 601 49 19</p>
            </div>
            <div className='contactForm'>
                <form id="contactForm" onSubmit={handleSubmit}>
                    <div className='contactDiv'>
                        <div className='contactContext'>
                            <label htmlFor="name">İsim*</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className='contactContext'>
                            <label htmlFor="surname">Soyisim*</label>
                            <input type="text" id="surname" name="surname" required />
                        </div>
                    </div>
                    <div className='contactDiv'>
                        <div className='contactContext'>
                            <label htmlFor="email">E-Posta*</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className='contactContext'>
                            <label htmlFor="phone">Telefon*</label>
                            <input type="tel" id="phone" name="phone" required />
                        </div>
                    </div>
                    <div className='contactDivv'>
                        <div className='contactContext'>
                            <label htmlFor="subject">Konu*</label>
                            <input type="text" id="subject" name="subject" required />
                        </div>
                        <div className='contactContext'>
                            <label htmlFor="message">Mesajınız*</label>
                            <textarea placeholder='Mesajınızı Buraya Yazabilirsiniz.' id="message" name="message" required></textarea>
                        </div>
                    </div>
                    <div className='contactBtnDiv'>
                        <button type="submit" className='contactBtn'>Gönder</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;