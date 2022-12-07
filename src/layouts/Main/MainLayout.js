import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Sidebar from '../../shared/Sidebar/Sidebar';

const MainLayout = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4'>
            <div className='w-full md:w-3/12'>
                <Navbar />
            </div>
            <div className='w-full md:w-6/12'>
                <Outlet />
            </div>
            <div className='w-full md:w-3/12'>
                <Sidebar />
            </div>
        </div>
    );
}

export default MainLayout;
