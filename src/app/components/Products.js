import React from 'react'
import cimbali from "../../../public/cimbali.webp"
import "../styles/Products.css"
import Link from 'next/link'

function Products() {
    return (
        <div className='products'>
            <Link className='servicesLink' href="/equipment">
                <div className='productsImage' style={{ backgroundImage: `url(${cimbali.src})` }}>

                    <span className='productsImageText'><span style={{ backgroundColor: "black", padding: "8px", borderRadius: "8px", fontSize: "18px" }}>TÜM EKİPMANLARIMIZ</span></span>
                </div>
            </Link>
        </div>
    )
}

export default Products