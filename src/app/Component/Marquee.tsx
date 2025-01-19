import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useRef } from 'react'

export default function Marquee() {

  const first = useRef(null) ;
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null)
  let xPercent = 0;
  let xDir = -1;
  useEffect(()=>{
    requestAnimationFrame(animation)
  },[])

  const animation = ()=>{
    if(xPercent < -100) xPercent = 0;
    if(xPercent > 0) xPercent = -300;
    gsap.set(first.current, {xPercent : xPercent}),
    gsap.set(second.current, {xPercent : xPercent}),
    gsap.set(third.current, {xPercent : xPercent}),
    gsap.set(fourth.current, {xPercent : xPercent})
    xPercent += 0.1 * xDir
    requestAnimationFrame(animation)
    
  }
  return (


    <div className='bg-pink-500 w-full text-[100px] text-black mt-10 h-full'>
      <div className='relative flex gap-12 w-full'>
      <p ref={first} className='whitespace-nowrap'>100XDevs</p>
      <p ref={second} className='whitespace-nowrap'>100xDevs</p>
      <p ref={third} className='whitespace-nowrap'>100xDevs</p>
      <p ref={fourth} className='whitespace-nowrap'>100xDevs</p>
      </div>
    </div>
  )
}
