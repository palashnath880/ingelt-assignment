import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import Sidebar from '../../shared/Sidebar/Sidebar';

const MainLayout = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            <div className='md:col-span-3 lg:col-span-1'>
                <Navbar />
            </div>
            <div className='md:col-span-2'>
                <Outlet />
            </div>
            <div className='md:col-span-1'>
                <Sidebar />
            </div>
        </div>
    );
}

export default MainLayout;
