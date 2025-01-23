import Links from './Link'
import Image from 'next/image'


function Footer() {
    return (
        <div className='relative h-[80vh] pt-28 bg-black'>
            <div>
                <Image src="/logo2.png" alt="Logo" width={500} height={500} className='z-1' />
                <div className='text-sm text-neutral-500 ml-5'>The way to get started is to quit talking and begin doing. Begin with Us</div>
            </div>
            <Links /> 
            
        </div>
    )
}

export default Footer
