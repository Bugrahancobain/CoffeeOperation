import React from 'react'
import "../styles/Participations.css"
import Image from 'next/image'

function Participations() {
    return (
        <div className='participationsMain'>
            <div className='participationsTitle'>
                <h1>İŞTİRAKLARIMIZ</h1>
            </div>
            <div className='particioationsImageBox'>
                <Image className='participationsImage' src="/kosetasarim.jpg" width={300} height={200} alt="kosetasarim" />
                <Image className='participationsImage' src="/loofy.jpeg" width={300} height={200} alt="loofy" />
                <Image className='participationsImage' src="/lynway.jpeg" width={300} height={200} alt="lynway" />
                <Image className='participationsImage' src="/perro.jpeg" width={300} height={200} alt="perro" />
                <Image className='participationsImage' src="/espressoturk.jpeg" width={300} height={200} alt="espressoturk" />
                <Image className='participationsImage' src="/burcuakdag.jpeg" width={300} height={200} alt="burcuakdag" />
            </div>
        </div>
    )
}

export default Participations 