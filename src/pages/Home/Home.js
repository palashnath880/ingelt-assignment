import React from 'react';
import MatchStatus from './MatchStatus/MatchStatus';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div className='px-14 py-16'>
            <h1 className='text-5xl text-white font-bold'>Important Matches</h1>
            <div className='mt-7 pb-6 border-b-2 border-[#20202D]'>
                <Slider />
            </div>
            <div>
                <MatchStatus />
            </div>
        </div>
    );
}

export default Home;
