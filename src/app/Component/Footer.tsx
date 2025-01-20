import React from 'react'
import { motion } from "framer-motion"
import { Bebas_Neue } from 'next/font/google'
import Links from './Link'


function Footer() {
    return (
        <div className='relative h-[80vh] pt-28'>
            <video src="/bg.mp4" autoPlay muted loop className='absolute inset-0 z-[-1]'></video>
            <div>
                <img src="/logo2.png" alt="Logo" width={500} height={500} className='z-1' />
                <div className='text-sm text-neutral-500 ml-5'>The way to get started is to quit talking and begin doing. Begin with Us</div>
            </div>
            <Links />
            {/* <div className='flex flex-col justify-center px-40 text- font-bold'>
                <div className=' text-2xl'>
                    Visit Again and Be a Top 1% with
                </div>
                <span className='relative text-7xl pt-10'>DIGIXLABS.
                    <svg
                        viewBox="0 0 286 73"
                        fill="none"
                        className="absolute inset-0"
                    >
                        <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{
                                duration: 1.25,
                                ease: "easeInOut",
                            }}
                            d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                            stroke="#FACC15"
                            strokeWidth="3"
                        />
                    </svg>
                </span>
            </div> */}
        </div>
    )
}

export default Footer
