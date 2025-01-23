"use client"

import Header from '../Component/Header'
import Image from 'next/image';

import { Roboto } from 'next/font/google';
const font = Roboto({
  subsets : ['latin'],
  weight : '400'
})

export default function page() {
  return (
    <div className={`${font.className} text-white bg-black`}>
      <Header />
      <div className='text-center items-center flex justify-center w-full h-full bg-black'>
        <div className='w-screen h-screen flex flex-col justify-center items-center text-pink-500 lg:text-3xl'>
          <div className='p-5'>Dont&apos; Worry, We&apos;ll launch this page before  GTA VI 🤠</div>
        <Image
        src={"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGIxMTh5bDhrZmg5ZXAxaGlmYmN3b3ZsOW01b2Y2aWk4ZWh5NTNidSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/o0vwzuFwCGAFO/giphy.gif"}
        alt="gif"
        width={250}
        height={250}></Image>
        </div>
      </div>
    </div>
  )
}
