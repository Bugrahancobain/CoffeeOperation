import React from 'react'
import "../styles/Footer.css"


function Footer() {
    const thisYear = new Date().getFullYear();
    return (
        <div className='footer'>© Coffee Operation {thisYear}. ALL RIGHTS RESERVED.</div>
    )
}

export default Footer