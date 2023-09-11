import React from 'react';
import './Creators.css'
import engagement from '../../assets/engaze-svg.png';
import autonomy from '../../assets/autonomy-svg.png';
import free from '../../assets/free-svg.svg';
import earn from '../../assets/earn-svg.svg';
const Creators = () => {
    return (
        <div className='md:flex '>
            <div id="why">
                <h1 className='text-2xl font-semibold tracking-wide mt-5'>Why become a creator?</h1>
                <p className='text-xl font-normal tracking wide mt-6'>Engage with your supporter and <br/> subscriber to sell your skills, knowledge <br/> and passions </p>
                <button className='flex justify-center items-center px-8 py-3 mt-6 bg-gray-900 border rounded-full text-white md:w-52 md:p-5'>Become a creator</button>
            </div>
            <div id="eafe" className='m-auto text-center md:grid md:grid-cols-2 md:gap-8'>
                <div className="engagement">
                    <img className='m-auto mt-10'  src={engagement} alt="" />
                    <h1 className='text-2xl font-semibold m-6'>Engagement </h1>
                    <p>Engage on a deeper level with the fans that matter most</p>
                </div>
                <div className="engagement">
                    <img className='m-auto mt-10' src={autonomy} alt="" />
                    <h1 className='text-2xl font-semibold m-6'>Autonomy </h1>
                    <p>Full autonomy on when and who you talk to.</p>
                </div>
                <div className="">
                    <img className='m-auto mt-10' src={free} alt="" />
                    <h1 className='text-2xl font-semibold m-6'>Free</h1>
                    <p className=''>No monthly fee or sign-up fee</p>
                </div>
                <div className="engagement">
                    <img className='m-auto mt-10' src={earn} alt="" />
                    <h1 className='text-2xl font-semibold m-6'>Earn</h1>
                    <p>Add a new source of income that you can control</p>
                </div>
            </div>
        </div>
        
    );
};

export default Creators;