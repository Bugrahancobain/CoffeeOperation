import React from 'react'
import "../styles/WhyCoffeeOp.css"

function WhyCoffeOp() {
    return (
        <div className="whyCoffeeOp">
            <div className='whyTitle'>
                <h1>Neden Coffee Operation?</h1>
            </div>
            <div className="whyContext">
                <div className="whyText">
                    <h2>Tecrübe</h2>
                    <p>Kahve sektöründe 10 yılı aşkın tecrübe.</p>
                </div>

                <div className="whyText">
                    <h2>Bilgi</h2>
                    <p>Specialty Coffee Association (SCA) temeline dayanan dünya standartlarında kahve bilgisi.</p>
                </div>
                <div className="whyText">
                    <h2>Ekipman Desteği</h2>
                    <p>Ürünlerinizin maximum lezzeti için ekipman desteği.</p>
                </div>
                <div className="whyText">
                    <h2>Mimari Destek</h2>
                    <p>Dilediğiniz tasarıma göre özel mimari tasarım desteği.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyCoffeOp