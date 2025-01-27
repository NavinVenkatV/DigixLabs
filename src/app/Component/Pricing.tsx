import React from 'react'
import PricingTag, { PricingTag2 } from './PricingTag'

function Pricing() {
  return (
    <div className='h-full w-full'>
      <div className="flex justify-center mt-32 ">
        <div className=" justify-center max-w-[800px] text-3xl lg:text-7xl">
            <div className="  text-center">Our Pricing
            </div>
            <div className='flex-col text-center mt-3 gap-2 text-slate-500 text-sm  lg:text-xl justify-center'>
                <div>
                <p>Choose the perfect plan for your DevRel needs.</p>
                <p>All plans include our core services with varying levels of engagement.</p>
                </div>
            </div>
        </div>
      </div>
      <div className='flex justify-center items-center '>
      <div className='lg:flex gap-10  mx-14'>
        <PricingTag/>
        <PricingTag2/>
      </div>
      </div>
      
    </div>
  )
}

export default Pricing
