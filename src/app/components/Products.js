import React from 'react'
import cimbali from "../../../public/cimbali.webp"
import "../styles/Products.css"
import Link from 'next/link'

function Products() {
    return (
        <div className='products'>
            <Link className='servicesLink' href="/product">
                <div className='productsImage' style={{ backgroundImage: `url(${cimbali.src})` }}>
                    <span className='productsImageText'>TÜM EKİPMANLARIMIZ</span>
                </div>
            </Link>
        </div>
    )
}

export default Products