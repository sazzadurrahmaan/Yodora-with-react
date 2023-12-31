import React from 'react';
import './Footer.css'
import logo from '../../assets/logo.svg'
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg'

const Footer = () => {
    return (
        <div id="footer" className='md:flex md:flex-row-reverse md:justify-between pb-10 pt-10
        '>
            <div id="about" className='md:flex '>
                 <div className='ml-8'>
                    <h1 className='text-xl font-semibold'>About</h1>
                    <p>How it works</p>
                    <p>Company</p>
                 </div>
                 <div className='ml-8'>
                    <h1 className='text-xl font-semibold'>For Creators</h1>
                    <p>How can i get paid</p>
                    <p>Become a creator</p>
                 </div>
                 <div className='ml-8'>
                    <h1 className='text-xl font-semibold'>Learn</h1>
                    <p>Blog</p>
                    <p>Coockies policy</p>
                    <p>Privacy policy</p>
                 </div>
                 <div className='ml-8'>
                    <h1 className='text-xl font-semibold'>Support</h1>
                    <p>Service Status</p>
                    <p>Report abuse</p>
                    <p>Dispute a payment</p>
                 </div>
            </div> 
            <div id="icons" className='mt-10 md:mt-0'>
                <div className='flex items-center justify-center md:justify-start '>
                <img  src={logo} alt="" />
                </div>
               
                <div className='flex items-center justify-center m-5 md:justify-start'>
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;