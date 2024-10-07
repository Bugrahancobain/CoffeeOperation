"use client";
import React, { useState, useEffect } from 'react';
import { ref, onValue } from "firebase/database";
import { database } from '../../../firebase'; // Firebase ayarlarını buraya ekleyin
import "../styles/Referances.css";
import Footer from '../components/Footer';

function pages() {
    const [references, setReferences] = useState([]);


    // Firebase'den referans verilerini çekme
    useEffect(() => {
        const referanslarRef = ref(database, 'references');
        onValue(referanslarRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const loadedReferences = Object.values(data); // Verileri bir array haline getir
                setReferences(loadedReferences);
            }
        });
    }, []);

    return (
        <div className='refMain'>
            <div className='refTitle'>
                <h1>Referanslarımız</h1>
            </div>
            <div className="referancesBox">
                {references.map((reference, index) => (
                    <a key={index} className='referancesA' target='_blank' href={reference.instagramLink}>
                        <div className='referancesImage' style={{ backgroundImage: `url(${reference.imageUrl})` }}>
                            <div className="instagramIcon">
                                <img src="/instagram-icon.png" alt="Instagram" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default pages;
