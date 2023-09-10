import React from 'react';
import './Creators.css'
import engagement from '../../assets/engaze-svg.png';
import autonomy from '../../assets/autonomy-svg.png';
import free from '../../assets/free-svg.svg';
import earn from '../../assets/earn-svg.svg';
const Creators = () => {
    return (
        <div>
            <div id="why">
                <h1 className='text-2xl font-semibold tracking-wide mt-5'>Why become a creator?</h1>
                <p className='text-xl font-normal tracking wide mt-6'>Engage with your supporter and <br/> subscriber to sell your skills, knowledge <br/> and passions </p>
                <button className='flex justify-center items-center px-8 py-3 mt-6 bg-gray-900 border rounded-full text-white'>Become a creator</button>
            </div>
            <div id="eafe">
                <div className="engagement">
                    <img src={engagement} alt="" />
                    <h1></h1>
                    <p></p>
                </div>
                <div className="engagement">
                    <img src={autonomy} alt="" />
                    <h1></h1>
                    <p></p>
                </div>
                <div className="engagement">
                    <img src={free} alt="" />
                    <h1></h1>
                    <p></p>
                </div>
                <div className="engagement">
                    <img src={earn} alt="" />
                    <h1></h1>
                    <p></p>
                </div>
            </div>
        </div>
        
    );
};

export default Creators;