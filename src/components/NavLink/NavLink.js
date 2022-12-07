import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomNavLink = ({ children, img, to }) => {
    const activeClassName = 'text-2xl flex items-center gap-11 py-3.5 font-bold text-white';
    const defaultClassName = 'text-2xl text-[#9A9A9A] flex items-center gap-11 py-3.5';
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? activeClassName : defaultClassName}>
            <img src={img} alt='' />
            {children}
        </NavLink>
    );
}

export default CustomNavLink;
