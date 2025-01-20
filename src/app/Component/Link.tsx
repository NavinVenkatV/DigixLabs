import React from 'react'

function Links() {
    return (
        <div className=' w-full lg:w-1/2'>
            <div className='py-10 px-5 flex justify-between mt-16'>
                <div>
                    <p className='font-bold pb-2 relative group'>About us
                    </p>
                    <p className='cursor-pointer py-1 relative group'>Our Company
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration:300 group-hover:w-full'></span>

                    </p>
                    <p className='cursor-pointer py-1 relative group' >Carrers
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration:300 group-hover:w-full'></span>

                    </p>
                    <p className='cursor-pointer py-1 relative group'>Press Kits
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration:300 group-hover:w-full'></span>

                    </p>
                </div>
                <div>
                    <p className='font-bold pb-2'>Legal</p>
                    <p className='cursor-pointer py-1 relative group'>Terms of Use
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration:300 group-hover:w-full'></span>

                    </p>
                    <p className='cursor-pointer py-1 relative group'>Privacy Policy
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration:300 group-hover:w-full'></span>

                    </p>
                    <p className='cursor-pointer py-1 relative group'>About us
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration:300 group-hover:w-full'></span>

                    </p>
                </div>
                <div>
                    <p className='font-bold pb-2'>About us</p>
                    <p className='cursor-pointer py-1 relative group'>Contact us
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration:300 group-hover:w-full'></span>

                    </p>
                    <p className='cursor-pointer py-1 relative group'>FAQ
                    <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration:300 group-hover:w-full'></span>

                    </p>
                </div>
            </div>
            <div className='px-5'>@DIGIXLABS. <span className='text-neutral-500'>@2025 All rights reserved.</span></div>

        </div>
    )
}

export default Links
