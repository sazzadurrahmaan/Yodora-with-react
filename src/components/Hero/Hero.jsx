import React from 'react';
import Header from '../Header/Header';
import './Hero.css'
import circleImage from '../../assets/Frame.png'

const Hero = () => {
    return (
        <div id="hero">
            <Header></Header>
            <div className="mt-20 flex justify-between">
                <div className="hero-text">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-wide">
                        Learn from your<br/> 
                        favorite creators<br/>
                        about <span className='text-orange-400'>fantasy reports</span><br/>
                    </h1>
                </div>
                <div className="hero-image">
                    <img className='mr-12 rounded-full border border-gray-500 p-2'
                    src={circleImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;