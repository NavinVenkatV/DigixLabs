import React from 'react'
import PricingTag from './PricingTag'

function Pricing() {
  return (
    <div className='h-full w-full'>
      <div className="flex justify-center mt-32 ">
        <div className=" justify-center max-w-[800px]">
            <div className="text-7xl  text-center">Our Pricing
            </div>
            <div className='flex-col text-center mt-3 gap-2 text-slate-500 text-2xl justify-center'>
                <div>
                <p>Choose the perfect plan for your DevRel needs.</p>
                <p>All plans include our core services with varying levels of engagement.</p>
                </div>
            </div>
        </div>
      </div>
      <div className='lg:flex justify-around px-12 lg:px-36'>
        <PricingTag/>
        <PricingTag/>
        <PricingTag/>
      </div>
    </div>
  )
}

export default Pricing
