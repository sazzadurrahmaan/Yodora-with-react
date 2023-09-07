import React, { useState } from 'react';
import logoSvg from '../../assets/logo.svg'
import matrixBar from '../../assets/menu-3.png'
import './Header.css';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {

        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <nav className='flex items-center justify-between'>
            <div className="flex items-center py-5 text-xl" id="left-nav">
                <img src={logoSvg} alt="Logo" />
                <div
                    id="list"
                    className={`md:block ml-4 space-x-4  ${isMenuOpen ? 'block flex flex-col text-center' : 'hidden'
                        } md:flex`}
                    style={{ left: 0, zIndex: 1 }}
                >
                    <a href="">Explore</a>
                    <a href="">Company</a>
                    <a href="">Support</a>
                </div>
            </div>
            <div>
                <div id="desktop" className='hidden md:block'>
                    <a className='mr-8 text-xl'>Become a member</a>
                    <button className='bg-slate-800 text-white px-8 py-3 rounded-full'> Sign in</button>
                </div>
                <div className=" md:hidden" onClick={toggleMenu} id="menu-bar">
                    <img src={matrixBar} alt="menubar" />
                </div>
            </div>
        </nav>

    );
};

export default Header;