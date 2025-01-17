"use client"

import Button from './Button'
import {motion} from "framer-motion"
import Image from './Image'

function Hero() {
  return (
    <motion.div 
    initial={{opacity:0, y:-10}}
    whileInView={{opacity:1, y:10}}
    transition={{duration:0.5, ease:"easeInOut"}}>
      <div className='flex justify-center h-full'>
        <div className='flex flex-col pt-40 lg:w-1/2'>
            <p className='text-3xl lg:text-7xl text-center font-bold'><span className='text-pink-500'>B</span>uilding the <span className='text-pink-500'>F</span>uture of <span className='text-pink-500'>T</span>echnical <span className='text-pink-500'>C</span>ontent.</p>
            <p className='text-slate-400 mt-3 flex justify-center items-center text-center'>Supercharge your brand with Cryptonic Labs. We offer 
                DevRel-as-a-Service for early-stage DevTools and SaaS startups.</p>
            <div className='mt-3 text-center'>
                <Button/>
            </div>
            <Image/>
        </div>
    </div>
    </motion.div>
  )
}

export default Hero
