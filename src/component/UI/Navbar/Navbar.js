import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <li className='item'>
                <NavLink to="/about">About</NavLink>
            </li>
            <li className='item'>
                <NavLink  to="/posts">Posts</NavLink>
            </li>
        </div>
    );
};

export default Navbar;
