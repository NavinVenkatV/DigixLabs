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
    if(xPercent < -50) xPercent = 0;
    if(xPercent > 0) xPercent = -300;
    gsap.set(first.current, {xPercent : xPercent}),
    gsap.set(second.current, {xPercent : xPercent})

    xPercent += 0.6 * xDir
    requestAnimationFrame(animation)
    
  }
  return (


    <div className='bg-pink-500 w-full text-[190px] text-black mt-10 h-full'>
      <div className='relative flex gap-3 w-full'>
      <p ref={first}  className='relative whitespace-nowrap'>Future belongs to  you</p>
      <p ref={second}  className='absolute whitespace-nowrap left-[100%]'>100xDevs</p> 
      </div>
    </div>
  )
}
