import React, { useEffect } from 'react';
import Button from './Button';


function Header() {
    
    return (
        <div>
            <div className='flex items-center justify-between px-3 md:px-10 lg:px-20 py-3'>
                <img src="/logo2.png" alt="Logo" width={250} height={250}/>
                <div className='hidden md:flex items-center'>
                        <a className='px-7'>Home</a>
                        <a className='px-7'>Read</a>
                        <a className='px-7'>Watch</a>
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
