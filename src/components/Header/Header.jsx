import React from 'react';
import logo from '../../assets/logo.png'
import matrixBar from '../../assets/menu-3.png'
const Header = () => {
    return (
        <nav className='flex items-center justify-between m-10 my-10 mx-10%'>
            <div className="logo">
                <img src={logo} alt="" />
                <div id="list" className='hidden md:block'>
                    <a href="">Explore</a>
                    <a href="">Company</a>
                    <a href="">Support</a>
                </div>
            </div>
            <div className="text-base">
                <div id="desktop" className='hidden md:block'>
                    <a  className='mr-8'>Become a member</a>
                    <button className='bg-slate-800 text-white px-8 py-4 rounded-full'> Sign in</button>
                </div>
                <div className="menu-bar  md:hidden"> 
                <img src={matrixBar} alt="" />
                </div>
            </div>
        </nav>

    );
};

export default Header;