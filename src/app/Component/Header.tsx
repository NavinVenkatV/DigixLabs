import Button from './Button';
import Link from 'next/link';


function Header() {
    
    return (
        <div>
            <div className='flex items-center  justify-between px-3 md:px-1 lg:px-20 py-3'>
                <img src="/logo2.png" alt="Logo" width={250} height={250} />
                <div className='hidden md:visible md:flex md:justify-between items-center w-64'>
                        <Link href='/' className='cursor-pointer relative group'>Home
                            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full'></span>
                        </Link>
                        <Link href='read' className='cursor-pointer relative group'>Photos
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full'></span>

                        </Link>
                        <Link href='ai' className='cursor-pointer  relative group'>Talk with AI
                        <span className='absolute  left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full'></span>

                        </Link>
                </div>
                <div className='flex flex-col gap-1 justify-center items-center  md:hidden relative'>
                    <span className='w-7 h-0.5 bg-white text-white'></span>
                    <span className='w-7 h-0.5 bg-white'></span>
                    <span className='w-7 h-0.5 bg-white'></span>
                </div>
                <div className=' lg:visible'>
                <Link href={"http://navinpinkman.vercel.app"} className='cursor-pointer relative group'>
                    Developer Info 
                    <span className='absolute  left-0 bottom-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full'></span>
                </Link>
                </div>
            </div>

            <div className='bg-slate-400 w-full'></div>
        </div>
    );
}

export default Header;
