import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.scss'
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {

    const {isAuth,setIsAuth} = useContext(AuthContext)

    const logout =()=>{
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className={classes.navbar_wrap}>

            <MyButton onClick={logout}>Выйти</MyButton>
            <ul>
                <li className={classes.item}>
                    <NavLink to="/about">Посты с пагинацией</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to="/posts">Посты с бесконечной прокруткой</NavLink>
                </li>
            </ul>

        </div>
    );
};

export default Navbar;
