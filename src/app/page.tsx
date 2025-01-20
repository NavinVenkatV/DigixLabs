"use client"

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import Pricing from "./Component/Pricing";
import { TextParallaxContentExample } from "./Component/parallax";
import { Marquee } from "./Component/Marquee";
import Footer from "./Component/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  

  useEffect(() => {
    // Animate the text section with re-trigger on scroll
    gsap.fromTo(
      ".animated-text div",
      {
        x: 100, // Start position (100px below original)
        opacity: 0, // Start invisible
      },
      {
        x: 0, // End position
        opacity: 1, // Fully visible
        duration: 1, // Animation duration
        stagger: 0.5, // Delay between each line
        ease: "power3.out", // Smooth easing
        scrollTrigger: {
          trigger: ".animated-text-section", // Element to observe
          start: "top 80%", // Trigger when the top of section hits 80% of viewport
          end: "bottom 80%", // End trigger when the bottom of section hits 20% of viewport
          toggleActions: "play none none reset", // Replay animation on re-entry
        },
      }
    );
  }, []);

  return (
    <div id="smooth" className="w-full h-full overflow-hidden">
      <Header />
      <Hero />
      <div className="text-center text-2xl text-neutral-500 mt-10">
        TRUSTED BY
      </div>
      <Marquee/>
      <div className=""><Marquee/></div>
      <div className="flex justify-center mt-32">
        <div className="flex flex-col justify-center max-w-[700px]">
          <div className="text-3xl lg:text-7xl text-center px-8 lg:px-0">
            Empower Your Brand with Cryptonic Labs
          </div>
          <div className="text-center text-sm  px-12 mt-5 text-neutral-500 lg:text-xl">
            From technical content to DevRel, we deliver the tools to elevate
            your brand and drive engagement.
          </div>
        </div>
      </div>
      
      <div className="text-black bg-pink-500 py-20 my-10 text-5xl lg:text-9xl pl-10 lg:pl-24  ">
        <div className="flex flex-col gap-2 animated-text animated-text-section">
          <div>Technical expertise,</div>
          <div>viral content,</div>
          <div>and growth strategies,</div>
          <div>all in one place.</div>
        </div>
      </div>
      <Pricing/>
      <div className="mt-14 bg-black">      <TextParallaxContentExample/>
      </div>
      <Footer/>
    </div> 
  );
}
