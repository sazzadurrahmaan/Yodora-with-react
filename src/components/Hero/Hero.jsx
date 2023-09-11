import React from 'react';
import Header from '../Header/Header';
import './Hero.css'
import circleImage from '../../assets/Frame.png'
import floatingImage from '../../assets/img.png'
import Team from '../Team/Team';
import Creators from '../Creators/Creators';
import GetStarted from '../GetStarted/GetStarted';
import Footer from '../Footer/Footer';
const Hero = () => {
    return (
        <div >
            <Header></Header>
            <section id="hero"  className='relative pb-24  md:pb-64'>
                <div className=" flex justify-between">
                    <div className="hero-text">
                        <h1 className=" md:mt-20 text-2xl md:text-4xl lg:text-5xl font-semibold tracking-wide mb-10">
                            Learn from your<br />
                            favorite creators<br />
                            about <span className='text-orange-400'>fantasy reports</span><br />
                        </h1>
                    </div>
                    <div className="hero-image">
                        <img className='mr-12 rounded-full border border-gray-500 p-2'
                            src={circleImage} alt="" />
                    </div>
                </div>
                <div id="floating-image" className='md:absolute md:top-60 absolute top-50'>
                    <img src={floatingImage} alt="" />
                </div>
            </section>
           
            <Team></Team>
            <Creators></Creators>
            <GetStarted></GetStarted>
           <Footer></Footer>
        </div>
    );
};

export default Hero;