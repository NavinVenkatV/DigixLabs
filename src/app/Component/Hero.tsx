"use client"

import Button from './Button'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {motion} from "framer-motion"
gsap.registerPlugin(ScrollTrigger)

function Hero() {
  
  return (
    
      <motion.div
      initial={{x:-100, opacity:0}}
      whileInView={{x:0, opacity:1}}
      transition={{duration:1, ease:"easeInOut"}}
       className='flex justify-center h-full  bg-red'>
        <div className='flex flex-col pt-40 lg:w-1/2 relative z-10'>
          <p className='text-3xl lg:text-7xl text-center font-bold smooth'><span className='text-pink-500'>B</span>uilding the <span className='text-pink-500'>F</span>uture of <span className='text-pink-500'>T</span>echnical <span className='text-pink-500'>C</span>ontent.</p>
          <p className='text-slate-500 text-sm px-8 lg:px-32 mt-3 flex justify-center items-center text-center'>Supercharge your brand with DigixLabs. We offer
            DevRel-as-a-Service for early-stage DevTools and SaaS startups.</p>
          <div className='mt-3 text-center'>
            <Button />
          </div>
            <motion.img
            initial={{x:200, opacity:0}}
            whileInView={{x:0, opacity:1}}
            transition={{duration:1, ease:"easeInOut"}}
             src="/bg.jpg" alt="LOADING..." className='rounded-full py-10' />
        </div>
        {/* <div className=' text-[7rem] text-center absolute font-mono z-0 top-1/2 text-pink-500'>EurekaxxxxxxxxxxMoment</div> */}
      </motion.div>
  )
}

export default Hero
