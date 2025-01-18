import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useRef } from 'react'

export default function Marquee() {

  const first = useRef(null) ;
  const second = useRef(null);
  let xPercent = 0;
  let xDir = -1;
  useEffect(()=>{
    requestAnimationFrame(animation)
  },[])

  const animation = ()=>{
    gsap.set(first.current, {xPercent : xPercent}),
    gsap.set(second.current, {xPercent : xPercent})
    xPercent += 0.1 * xDir
    requestAnimationFrame(animation)
    
  }
  return (


    <div className='relative bg-pink-500  text-[240px] text-black mt-10 h-full'>
      <div className='flex gap-6'>
        <p ref={first} className=' whitespace-nowrap'>MARQUEE EFFECT</p>
        <p ref={second} className='absolute left-[100%]'>MARQUEE EFECT</p>
      </div>
    </div>
  )
}
