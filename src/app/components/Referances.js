import React from 'react'
import "../styles/Referances.css"
import Arty from "../../../public/arty.jpg"
import muscent from "../../../public/muscent.jpg"
import packers from "../../../public/packers.jpg"
import Link from 'next/link'


function Referances() {
    return (
        <div>
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
            <div className='referancesLinkButtonDiv'>
                <Link className='referancesLinkButton' href="/referances">TÜM REFERANSLARIMIZ</Link>
            </div>
        </div>
    )
}

export default Referances