import React from 'react';
import './Team.css'
import teamImg1 from '../../assets/img-card.png';
import teamImg2 from '../../assets/img-card (1).png';
import teamImg3 from '../../assets/img-card (2).png';

const Team = () => {
    return (
        <section className='bg-gray-900' id="team">
            <div id="team-text">
                <h1 className='md:text-4xl lg:text-5xl font-poppins text-3xl  font-semibold  tracking-wide text-white'><span className='text-orange-500 '>Get direct</span><br />
                    knowledge and <br /> insight.
                </h1>
            </div>
            <div id="team-img" className='md:grid grid-cols-3 gap-6'>
                <img className ="mt-6" src={teamImg1} alt="" />
                <img className ="mt-6" src={teamImg2} alt="" />
                <img className ="mt-6" src={teamImg3} alt="" />
            </div>

        </section>

    );
};

export default Team;