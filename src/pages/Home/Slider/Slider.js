import React from 'react';
import { Link } from 'react-router-dom';
import sliderImg from '../../../images/slider1.png';

const Slider = () => {
    return (
        <div>
            <div className='rounded-[30px] overflow-hidden relative'>
                <img src={sliderImg} className='w-full h-auto' alt='Slider thumbnail' />
                <div className='absolute bottom-0 left-0 w-full pl-14 py-7 bg-gradient-to-b from-[transparent] to-[#201616]'>
                    <h1 className='text-white text-5xl font-normal'>Juventus <span className='text-3xl italic'>VS</span> Real Madrid</h1>
                    <p className='text-white mb-4 mt-1'>UEFA Champions League Football</p>
                    <Link className='text-base inline-block px-6 py-2 rounded-lg bg-violet-500 text-white'>View</Link>
                </div>
                <div className='absolute top-[15px] right-[15px] flex'>
                    <span class="bg-red-500 text-white text-sm font-medium px-2.5 py-0.5 rounded flex items-center">
                        <span className='w-3 h-3 duration-300 bg-white inline-block rounded-full mr-2 animate-pulse'></span>
                        Live
                    </span>
                    <span class="bg-[#00000040] text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded flex items-center">
                        22 : 30
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Slider;
