import React from 'react';
import s from './footer.module.css'

const Footer = () => {
    return (
        <div className={s.container}>
            <p className={s.footerText}>© 2022 «Elecard»</p>
        </div>
    );
};

export default Footer;