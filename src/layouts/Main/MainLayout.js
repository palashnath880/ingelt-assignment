import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div className='flex flex-row gap-4'>
            <div className='w-3/12'>
                <Navbar />
            </div>
            <div className='w-6/12'></div>
            <div className='w-3/12'></div>
        </div>
    );
}

export default MainLayout;
