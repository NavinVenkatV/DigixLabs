import Image from 'next/image'
import React from 'react'

function Images() {
  return (
    <div>
      <Image src="/bg.jpg" alt="LOADING..." className='rounded-full py-10'/>
    </div>
  )
}

export default Images
