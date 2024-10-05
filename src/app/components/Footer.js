import React from 'react'
import "../styles/Footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
    const thisYear = new Date().getFullYear();
    return (
        <div>
            <div className='footer'>© Coffee Operation {thisYear}. ALL RIGHTS RESERVED.</div>
            <div className='socialIcons'>
                <a href="#">
                    <FaInstagram className='social' />
                </a>
                <a href="#">
                    <FaLinkedin className='social' />
                </a>
                <a href="#">
                    <FaFacebookSquare className='social' />
                </a>
            </div>
        </div>
    )
}

export default Footer