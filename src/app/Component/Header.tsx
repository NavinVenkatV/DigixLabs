import Button from './Button';
import Link from 'next/link';


function Header() {
    
    return (
        <div>
            <div className='flex items-center justify-between px-3 md:px-1 lg:px-20 py-3'>
                <img src="/logo2.png" alt="Logo" width={250} height={250} />
                <div className='hidden md:flex md:justify-between items-center w-64'>
                        <Link href='/' className='cursor-pointer relative group'>Home
                            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
                        </Link>
                        <Link href='read' className='cursor-pointer relative group'>Photos
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>

                        </Link>
                        <Link href='ai' className='cursor-pointer  relative group'>Talk with AI
                        <span className='absolute  left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>

                        </Link>
                </div>
                <div>
                    <Button/>
                </div>
            </div>

            <div className='bg-slate-400 w-full'></div>
        </div>
    );
}

export default Header;
