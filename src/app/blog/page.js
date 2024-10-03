import React from 'react'
import "../styles/Services.css"
import latte from "../../../public/latte.webp";
import danisman from "../../../public/danişman.webp";
import architect from "../../../public/architect.webp";
import "../styles/Blog.css"
import Footer from '../components/Footer';

function page() {
    return (
        <div className='blog'>
            <div className="blogTitle">
                <h1>Blog</h1>
            </div>
            <div className="blogBox">
                <div className='blogImage' style={{ backgroundImage: `url(${latte.src})` }}>
                    <span>Selam</span>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod doloribus odio consectetur dolorum soluta vel minima quibusdam consequuntur rerum qui.</p>
                </div>
                <div className='blogImage' style={{ backgroundImage: `url(${danisman.src})` }}>
                    <span>Bugun Kahve</span>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum consequuntur amet quisquam mollitia illum, iste sit. Labore inventore molestias alias!</p>
                </div>
                <div className='blogImage' style={{ backgroundImage: `url(${architect.src})` }}>
                    <span>Su Mimarisi</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores modi consectetur officiis possimus non similique consequatur nulla, nihil nostrum atque?</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page