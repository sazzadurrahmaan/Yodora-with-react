import React from 'react';
import logoSvg from '../../assets/logo.svg'
import matrixBar from '../../assets/menu-3.png'
import './Header.css';
const Header = () => {
    return (
        <nav className='flex items-center justify-between mx-10 my-5 '>
            <div className="flex items-center p-5 md:text-2xl" id="left-nav">
                <img src={logoSvg} alt="Logo" />
                <div id="list" className='hidden md:block ml-4 space-x-4 '>
                    <a href="">Explore</a>
                    <a href="">Company</a>
                    <a href="">Support</a>
                </div>
            </div>
            <div className="md:text-2xl">
                <div id="desktop" className='hidden md:block'>
                    <a className='mr-8'>Become a member</a>
                    <button className='bg-slate-800 text-white px-8 py-3 rounded-full'> Sign in</button>
                </div>
                <div className="menu-bar  md:hidden">
                    <img src={matrixBar} alt="menubar" />
                </div>
            </div>
        </nav>

    );
};

export default Header;