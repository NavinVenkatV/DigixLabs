"use client"

import Header from "../Component/Header";

import Footer from "../Component/Footer";
import Yt from "../Component/yt";

import { Quattrocento } from 'next/font/google';

const font = Quattrocento({
  subsets : ['latin'],
  weight : '400'
})

export default function Home() {

  

  return (
    <div id="smooth" className={`w-full h-full  overflow-hidden m-0 p-0 ${font.className}`}>
      <Header />
      <div className="py-5">
        <Yt/>
      </div>
      <Footer/>
    </div> 
  );
}
