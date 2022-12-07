import React from 'react';
import arrow from '../../images/arrow.svg';
import home from '../../images/home.svg';
import blogs from '../../images/blogs.svg';
import football from '../../images/football.svg';
import tennis from '../../images/tennis.svg';
import cricket from '../../images/cricket.svg';
import CustomNavLink from '../../components/NavLink/NavLink';

const Navbar = () => {
    return (
        <aside className='pt-12 min-h-screen flex flex-col sticky top-0 right-0 border-r-4 border-[#20202D]'>
            <h1 className="text-center text-4xl uppercase text-white font-['Lexend_Mega'] font-normal">CRICNEWS</h1>
            <nav className='px-6 grow'>
                <div className=''>
                    <h3 className='text-2xl font-bold text-white py-14 flex justify-between items-center'>
                        NavLinks
                        <img className='w-11 h-auto' src={arrow} alt='Arrow SVG' />
                    </h3>
                    <ul className='pb-10 border-b-2 border-b-[#20202D]'>
                        <li>
                            <CustomNavLink img={home} to='/'>Home</CustomNavLink>
                        </li>
                        <li>
                            <CustomNavLink img={blogs} to='/blogs'>Articles</CustomNavLink>
                        </li>
                    </ul>
                </div>
                <div className=''>
                    <h3 className='text-2xl font-bold text-white pb-11 pt-7'>
                        Games
                    </h3>
                    <ul className='pb-10'>
                        <li>
                            <CustomNavLink to='/cricket' img={cricket} >Cricket</CustomNavLink>
                        </li>
                        <li>
                            <CustomNavLink to='/tennis' img={tennis} >Tennis</CustomNavLink>
                        </li>
                        <li>
                            <CustomNavLink to='/football' img={football}>Football</CustomNavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className='rounded-t-[30px] bg-[#262735]'>
                <h1 className='text-center text-2xl font-bold text-white py-8'>Feeling Lucky Today?</h1>
            </div>
        </aside >
    );
}

export default Navbar;
