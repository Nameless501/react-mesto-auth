import React from 'react';
import headerLogo from '../images/logo.svg'
import Navigation from './Navigation';

function Header({ signOut }) {
    return(
        <div className='header page__header'>
            <img src={headerLogo} alt="Логотип" className="header__logo"></img>
            <Navigation signOut={signOut} />
        </div>
    );
}

export default Header;