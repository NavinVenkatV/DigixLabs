import React from 'react'
import { useTransform, useScroll, MotionValue } from 'framer-motion'
import { useRef, useEffect } from 'react'
import { motion } from "framer-motion"
import Lenis from '@studio-freight/lenis'
import { RevealLinks } from './text'

export default function Yt() {
    useEffect(() => {
        const lenis = new Lenis()
        const raf = (time: number) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    }, [])

    const box = useRef(null)

    interface typess {
        images: string[],
        y: MotionValue<number>
    }

    const { scrollYProgress } = useScroll({
        target: box,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [1, 800])
    const y2 = useTransform(scrollYProgress, [0, 1], [1, -70])
    const y3 = useTransform(scrollYProgress, [0, 1], [1, 500])
    const y4 = useTransform(scrollYProgress, [0, 1], [1, -30])

    function Card({ images, y }: typess) {
        return (
            <motion.div style={{ y }} className='w-full h-full p-[2vw] gap-[2vw] ] overflow-hidden'>
                {images.map((img,i) => (
                    <img
                    key={i}
                        src={img}
                        className='rounded-3xl py-2 w-[25%] h-[100%] min-w-[320px] overflow-hidden '></img>
                ))}
            </motion.div>
        )
    }

    const images = [
        "i1.webp",
        "i2.webp",
        "i3.webp",
        "i4.webp",
        "i5.webp",
        "i6.webp",
        "i7.webp",
        "i8.webp",
        "i9.webp",
        "i10.webp",
        "i11.webp",
        "i12.webp"
    ]
    return (
        <div>
            <div className='lg:h-[100vh] w-full relative '><img src="z.jpg" alt="image" />
                <div className='absolute bottom-1 left-1 md:top-32 md:left-10 text-5xl text-black font-extrabold '><RevealLinks /></div></div>
            <div ref={box} className='flex overflow-hidden'>
                <Card images={[images[0], images[1], images[2]]} y={y} />
                <Card images={[images[3], images[4], images[5]]} y={y2} />
                <Card images={[images[6], images[7], images[8]]} y={y3} />
                <Card images={[images[9], images[10], images[11]]} y={y4} />
            </div>
        </div>
    )
}


