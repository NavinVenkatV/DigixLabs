import React, { useEffect } from 'react';
import Button from './Button';


function Header() {
    
    return (
        <div>
            <div className='flex items-center justify-between px-3 md:px-1 lg:px-20 py-3'>
                <img src="/logo2.png" alt="Logo" width={250} height={250} />
                <div className='hidden md:flex md:justify-between items-center w-64'>
                        <a href='#' className='cursor-pointer relative group'>Home
                            <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>
                        </a>
                        <a className='cursor-pointer relative group'>Read
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>

                        </a>
                        <a className='cursor-pointer relative group'>Watch
                        <span className='absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full'></span>

                        </a>
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
