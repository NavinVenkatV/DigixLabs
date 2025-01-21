import React from 'react'
import { motion } from "framer-motion"
import { Bebas_Neue } from 'next/font/google'
import Links from './Link'


function Footer() {
    return (
        <div className='relative h-[80vh] pt-28'>
            <video src="/bg.mp4" autoPlay muted loop className='absolute inset-0 z-[-1] '></video>
            <div>
                <img src="/logo2.png" alt="Logo" width={500} height={500} className='z-1' />
                <div className='text-sm text-neutral-500 ml-5'>The way to get started is to quit talking and begin doing. Begin with Us</div>
            </div>
            <Links />
            
        </div>
    )
}

export default Footer
