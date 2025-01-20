import React from 'react'
import {motion} from "framer-motion"

function Figma() {
    return (
        <div>
            <div className="flex justify-center mt-32">
                <div className="flex flex-col justify-center max-w-[700px]">
                    <div className="text-3xl lg:text-7xl text-center px-8 lg:px-0">
                        Empower Your Brand with <span className='relative'>DigixLabs
                        <svg
                        viewBox="0 0 286 73"
                        fill="none"
                        className="absolute -left-2 -top-2 -right-2 bottom-0"
                    >
                        <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{
                                duration: 1.25,
                                ease: "easeInOut",
                            }}
                            d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                            stroke="#FACC15"
                            strokeWidth="3"
                        />
                    </svg>
                        </span>
                        
                    </div>
                    <div className="text-center text-sm  px-12 mt-5 text-neutral-500 lg:text-xl">
                        From technical content to DevRel, we deliver the tools to elevate
                        your brand and drive engagement.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Figma

{/* <div className='flex flex-col justify-center px-40 text- font-bold'>
                <div className=' text-2xl'>
                    Visit Again and Be a Top 1% with
                </div>
                <span className='relative text-7xl pt-10'>DIGIXLABS.
                    <svg
                        viewBox="0 0 286 73"
                        fill="none"
                        className="absolute inset-0"
                    >
                        <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            transition={{
                                duration: 1.25,
                                ease: "easeInOut",
                            }}
                            d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                            stroke="#FACC15"
                            strokeWidth="3"
                        />
                    </svg>
                </span>
            </div> */}