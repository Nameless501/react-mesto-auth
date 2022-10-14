import React from 'react';
import headerLogo from '../images/logo.svg'

function Header() {
    return(
        <div className='header page__header'>
            <img src={headerLogo} alt="Логотип" className="header__logo"></img>
        </div>
    );
}

export default Header;