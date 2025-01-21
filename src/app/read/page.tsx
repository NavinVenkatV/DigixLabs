"use client"

import Header from "../Component/Header";
import Lenis from "@studio-freight/lenis/types";

import Footer from "../Component/Footer";
import Yt from "../Component/yt";


export default function Home() {

  

  return (
    <div id="smooth" className="w-full h-full overflow-hidden m-0 p-0">
      <Header />
      <div className="py-5">
        <Yt/>
      </div>
      <Footer/>
    </div> 
  );
}
