import React from 'react'

function PricingTag() {
    return (
        <div className='p-11 bg-pink-500 rounded-3xl mt-32 hover:bg-pink-400'>
            <p className='text-center text-black text-3xl'>$200/Month</p>
            <div className='mt-10'>
            <p>✓ 2 Technical Blog Posts</p>
            <p>✓ 2 Thought Leadership Articles</p>
            <p>✓ Social Media Management</p>
            <p>✓ Basic Community Engagement</p>
            </div>
            <button className='w-full py-2 mt-10 bg-black text-white text-2xl rounded-3xl flex flex-col justify-center items-center hover:text-pink-300'>
                Get Started
            </button>
        </div>
    )
}

export default PricingTag
