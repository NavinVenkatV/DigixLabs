import React from 'react'

function Card({ color, title, description, src, index }: any) {
    return (
        <div className='w-[1000px] h-[500px] items-center gap-5 text-white' style={{ background: color }}>
            <div className='flex justify-between'>
                <div>{title}
                    {description}</div>
                <div style={{ backgroundImage: src }}></div>
            </div>
        </div>
    )
}

export default Card
