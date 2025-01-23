"use client"

import Link from 'next/link';
import { useState } from 'react';
import {motion} from "framer-motion"

function Header() {
    const [click, setClick] = useState(false);

    function Clicked() {
        setClick(!click);
    }

    return (
        <div>
            <div className='flex items-center relative justify-between px-3 md:px-1 lg:px-20 py-3 text-white bg-black'>
                <img src="/logo2.png" alt="Logo" width={250} height={250} />
                <div className='hidden md:flex md:justify-between items-center w-64'>
                    <Link href='/' className='cursor-pointer relative group'>Home
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full'></span>
                    </Link>
                    <Link href='read' className='cursor-pointer relative group'>Photos
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full'></span>
                    </Link>
                    <Link href='ai' className='cursor-pointer relative group'>Talk with AI
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full'></span>
                    </Link>
                </div>

                <button onClick={Clicked} className='flex flex-col gap-1 justify-center items-center md:hidden relative'>
                    <span className='w-7 h-0.5 bg-white'></span>
                    <span className='w-7 h-0.5 bg-pink-500'></span>
                    <span className='w-7 h-0.5 bg-white'></span>
                </button>

                <div className='hidden md:block'>
                    <Link href={"http://navinpinkman.vercel.app"} className='cursor-pointer relative group'>
                        Developer Info
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full'></span>
                    </Link>
                </div>
            </div>

            {/* Full-screen menu overlay */}
            {click && (
                <motion.div
                initial={{z:0, opacity:0}}
                animate={{z:1, opacity:1}}
                transition={{duration:0.5, ease:"easeInOut"}}
                 className='fixed top-0 left-0 w-full h-full bg-black z-50 flex flex-col items-center justify-center'>
                    <Link href='/' className='cursor-pointer relative group text-white text-2xl mb-4'>Home
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full'></span>
                    </Link>
                    <Link href='read' className='cursor-pointer relative group text-white text-2xl mb-4'>Photos
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full'></span>
                    </Link>
                    <Link href='ai' className='cursor-pointer relative group text-white text-2xl mb-4'>Talk with AI
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full'></span>
                    </Link>
                    <button onClick={Clicked} className='absolute top-5 right-5 text-white'>Close</button>
                </motion.div>
            )}

            <div className='bg-slate-400 w-full'></div>
        </div>
    );
}

export default Header;