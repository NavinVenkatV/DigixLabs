"use client"

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-black">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="The gap"
        heading="Don’t Expect to Be Very Good."
      >
        <ExampleContent 
        description="“The skill and ability involved in writing sentences is generally underrated, and assumed to be a much more universal capacity than it really is…Most people know that they couldn&apos;t write even a very bad song, or paint a picture, and understand their limits in that regard. On the other hand, everybody can write prose after some fashion, so it is not quite clear to them that they don’t actually have the ability to do it to a professional standard. That ability is quite a rare one.” - Philip Hensher, Professor of Creative Writing at the University of Exeter"
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Write Every Day"
        heading="Be Consistent Anyway."
      >
        <ExampleContent 
        description="Many great projects go through a stage early on where they don&apos;t seem very impressive, even to their creators. You have to push through this stage to reach the great work that lies beyond. But many people don&apos;t. Most people don&apos;t even reach the stage of making something they&apos;re embarrassed by, let alone continue past it. They&apos;re too frightened even to start. - Paul Graham"
        />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Deliberate Practice"
        heading="Block Time for Writing."
      >
        <ExampleContent 
        description="“Because of technology, some people feel distracted  they cant focus, that they can&apos;t pay attention to what&apos;s in front of them because their minds keep jumping around. They aren&apos;t getting their work done; they&apos;re not paying attention to their kids.” - Gretchen Ruben"
        />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;


interface childType {
  children : React.ReactNode,
  imgUrl : string, 
  heading : string,
  subheading : string
}

const TextParallaxContent = ({children, imgUrl, heading, subheading} : childType)  => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

interface imgType {
  imgUrl : string
}

const StickyImage = ({ imgUrl  } : imgType ) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)` ,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

interface overlayType {
  heading : string,
  subheading : string
}

const OverlayCopy = ({heading, subheading} : overlayType)  => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};
interface sample{
  description : string
}
const ExampleContent = ({description}  : sample) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Additional content explaining the above card here
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-pink-500 md:text-2xl">
      {description}
      </p>
      <p className="mb-8 text-xl text-white md:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        reiciendis blanditiis aliquam aut fugit sint.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Learn more <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);

