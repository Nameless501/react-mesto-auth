import { useState } from 'react';
import headerLogo from '../images/logo.svg'
import Navigation from './Navigation';

function Header({ signOut }) {
    const [menuIsOpen, setMenuStatus] = useState(false);

    function handleClick() {
        if(menuIsOpen) {
            setMenuStatus(false);
        } else {
            setMenuStatus(true);
        }
    }

    return(
        <div className='header page__header'>
            <img 
                src={headerLogo} 
                alt="Логотип" 
                className="header__logo"
            >
            </img>
            <Navigation 
                signOut={signOut}
                isOpen={menuIsOpen}
            />
            <button 
                className={`header__menu-button 
                    ${menuIsOpen ? 
                        "header__menu-button_type_close" : "header__menu-button_type_open"}
                    `}
                onClick={handleClick}
            />
        </div>
    );
}

export default Header;