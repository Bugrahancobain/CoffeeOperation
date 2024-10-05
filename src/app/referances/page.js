import React from 'react'
import "../styles/Referances.css"
import Arty from "../../../public/arty.jpg"
import muscent from "../../../public/muscent.jpg"
import packers from "../../../public/packers.jpg"
import Asley from "../../../public/asley.jpg"
import Soglad from "../../../public/soglad.jpg"
import Yirmikahve from "../../../public/yirmikahve.jpg"
import Footer from '../components/Footer'

function pages() {
    return (
        <div className='refMain'>
            <div className='refTitle'>
                <h1>Referanslarımız</h1>
            </div>
            <div className="referancesBox">
                <a className='referancesA' target='_blank' href="https://www.instagram.com/artycoffeebar/">
                    <div className='referancesImage' style={{ backgroundImage: `url(${Arty.src})` }}>
                        <div className="instagramIcon">
                            <img src={"/instagram-icon.png"} alt="Instagram" />
                        </div>
                    </div>
                </a>
                <a className='referancesA' target='_blank' href="https://www.instagram.com/muscentgourmand/">
                    <div className='referancesImage' style={{ backgroundImage: `url(${muscent.src})` }}>
                        <div className="instagramIcon">
                            <img src="/instagram-icon.png" alt="Instagram" />
                        </div>
                    </div>
                </a>
                <a className='referancesA' target='_blank' href="https://www.instagram.com/packerscoffeeco/">
                    <div className='referancesImage' style={{ backgroundImage: `url(${packers.src})` }}>
                        <div className="instagramIcon">
                            <img src="/instagram-icon.png" alt="Instagram" />
                        </div>
                    </div>
                </a>
            </div>
            <div className="referancesBox" style={{ margin: "30px 0" }}>
                <a className='referancesA' target='_blank' href="https://www.instagram.com/asleycafeofficial/">
                    <div className='referancesImage' style={{ backgroundImage: `url(${Asley.src})` }}>
                        <div className="instagramIcon">
                            <img src={"/instagram-icon.png"} alt="Instagram" />
                        </div>
                    </div>
                </a>
                <a className='referancesA' target='_blank' href="https://www.instagram.com/sogladcoffee/">
                    <div className='referancesImage' style={{ backgroundImage: `url(${Soglad.src})` }}>
                        <div className="instagramIcon">
                            <img src="/instagram-icon.png" alt="Instagram" />
                        </div>
                    </div>
                </a>
                <a className='referancesA' target='_blank' href="https://www.instagram.com/20kahve/">
                    <div className='referancesImage' style={{ backgroundImage: `url(${Yirmikahve.src})` }}>
                        <div className="instagramIcon">
                            <img src="/instagram-icon.png" alt="Instagram" />
                        </div>
                    </div>
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default pages