"use client"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../Component/Header";

import Footer from "../Component/Footer";
import Accordion from "../Component/Accordion";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {


  return (
    <div id="smooth" className="w-full h-full overflow-hidden">
      <Header />
      <div className="">
        <Accordion/>
      </div>
      <Footer/>
    </div> 
  );
}
