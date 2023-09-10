import React from 'react';
import Header from '../Header/Header';
import './Hero.css'
import circleImage from '../../assets/Frame.png'
import floatingImage from '../../assets/img.png'
import Team from '../Team/Team';
const Hero = () => {
    return (
        <div >
            <Header></Header>
            <section id="hero" className='relative ' >
                <div className="mt-20 flex justify-between">
                    <div className="hero-text">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold tracking-wide">
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

            </section>
            {/* <section  className='bg-green-500 absolute top-80'>
                <div  id="floating-img"><img className='w-300 h-130 'src={floatingImage} alt="" /></div>
                
            </section> */}
            <Team></Team>
        </div>
    );
};

export default Hero;