import React from 'react';
import './Team.css'
import teamImg1 from '../../assets/img-card.png';
import teamImg2 from '../../assets/img-card (1).png';
import teamImg3 from '../../assets/img-card (2).png';
import arroIcon from '../../assets/arrow-icon.png';


const Team = () => {
    return (
        <section className='bg-custom-color md:pb-10 p-5' id="team">
            <div id="team-text" >
                <h1 className='mt-28 md:mt-64 md:mt-40 md:text-4xl lg:text-5xl font-poppins text-3xl  font-semibold  text-white'><span className='text-orange-500 '>Get direct</span><br />
                    knowledge and  insight.
                </h1>
            </div>
            <div id="team-img" className='md:grid grid-cols-3 gap-6'>
                <img className ="mt-6" src={teamImg1} alt="" />
                <img className ="mt-6" src={teamImg2} alt="" />
                <img className ="mt-6" src={teamImg3} alt="" />
            </div>
            <div id="team-info" className='text-center md:grid md:grid-cols-4 md:font-semibold'>
                <div className="creators">
                    <h1>300</h1>
                    <p>creators</p>
                </div>
                <div className="users">
                    <h1>14.4K</h1>
                    <p>users</p>
                </div>
                <div className="session">
                    <h1>9.11k</h1>
                    <p>session</p>
                </div>
                <div className="flex items-center justify-center">
                    <p>Explore the marketplace</p>
                    <img className='w-10 h-10 ml-6' src={arroIcon} alt="" />
                </div>
            </div>
            
        </section>

    );
};

export default Team;