"use client"

import Lenis from '@studio-freight/lenis'


import { useEffect } from "react";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Pricing from "./Component/Pricing";
import { TextParallaxContentExample } from "./Component/parallax";
import { Marquee } from "./Component/Marquee";
import Footer from "./Component/Footer";
import Figma from "./Component/figma";
import { motion } from "framer-motion"
import Faq from './Component/faq';
import { Roboto } from 'next/font/google';
const font = Roboto({
  subsets : ['latin'],
  weight : '400'
})


export default function Home() {

  useEffect(() => {
    const lenis = new Lenis()
    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <div id="smooth" className={`w-full h-full ${font.className} font- overflow-hidden relative text-white bg-black`}>
      <Header />
      <Hero />
      <div className="text-center text-2xl text-neutral-500 mt-10">
        TRUSTED BY
      </div>
      <Marquee />
      <div className=""><Marquee /></div>
      <Figma />


      <div className="text-black bg-pink-500 py-20 my-10 text-5xl lg:text-9xl pl-10 lg:pl-24  ">
        <div className="flex flex-col gap-2 animated-text animated-text-section">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 200 }}>
            <div>Technical expertise,</div>
            <div>viral content,</div>
            <div>and growth strategies,</div>
            <div>all in one place.</div>
          </motion.div>

        </div>
      </div>
      <div className="mt-14 bg-black">      <TextParallaxContentExample />
      </div>
      <Pricing />

      <div className='my-36'><Faq/></div>
      <Footer />
    </div>
  );
}
