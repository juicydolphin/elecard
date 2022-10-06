import React from 'react';
import s from './header.module.css'
import logo from './../../assets/img/logo.png'
const Header = () => {
    return (
        <div className={s.container}>
            <img className={s.logo} src={logo}/>
        </div>
    );
};

export default Header;