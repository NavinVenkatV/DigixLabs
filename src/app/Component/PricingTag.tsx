import React from 'react'

export default function PricingTag() {
    return (
        <div className='p-11 bg-pink-500 rounded-3xl mt-32 min-w-[350px]'>
            <p className='text-center text-black text-3xl'>$0/Month</p>
            <p className='items-center flex justify-center'>Early Bid*</p>
            <div className='mt-10'>
            <p>✓ 2 Technical Blog Posts</p>
            <p>✓ 2 Thought Leadership Articles</p>
            <p>✓ Social Media Management</p>
            <p>✓ Basic Community Engagement</p>
            </div>
            <button className='w-full py-2 mt-16 bg-black text-white text-2xl rounded-3xl flex flex-col justify-center items-center hover:text-pink-300'>
                Get Started
            </button>
        </div>
    )
}

export  function PricingTag2() {
    return (
        <div className='p-11 bg-pink-500 rounded-3xl mt-32 min-w-[350px]'>
            <p className='text-center text-black text-3xl'>$44/Month</p>
            <p className='items-center flex justify-center'>20% off*</p>

            <div className='mt-10'>
            <p>✓ 4 Technical Blog Posts</p>
            <p>✓ 4 Thought Leadership Articles</p>
            <p>✓ Advanced Social Media Management</p>
            <p>✓ Advanced Community Engagement</p>
            </div>
            <button className='w-full py-2 mt-16 bg-black text-white text-2xl rounded-3xl flex flex-col justify-center items-center hover:text-pink-300'>
                Get Started
            </button>
        </div>
    )
}

