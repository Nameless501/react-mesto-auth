import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';
import { useLocation } from "react-router-dom";
import HeaderButton from './HeaderButton';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Navigation({ signOut }) {
    let isLoggedIn = useContext(LoginContext);
    let currentLocation = useLocation();
    const currentUser = useContext(CurrentUserContext);

    return(
        <ul className="header__navigation-bar">
            {isLoggedIn &&
                <li>
                    <p className="header__email" >
                        {currentUser.email}
                    </p>
                </li>
            }
            <li>
                {currentLocation.pathname === "/sign-up" ?
                    <HeaderButton text="Войти" link="/sign-in" />
                    : 
                    currentLocation.pathname === "/sign-in" ?
                        <HeaderButton text="Регистрация" link="/sign-up" />
                        :
                        <HeaderButton text="Выйти" link="/sign-in" signOut={signOut} />
                }
            </li>
        </ul>
    );
}

export default Navigation;







/* {isLoggedIn ?
    <ul className="header__navigation-bar">
        <li>
            <p className="header__email" >
                email@text.com
            </p>
        </li>
        <li>
            <HeaderButton text="Выйти" link="/sign-in" />
        </li>
    </ul>
    : 
    currentLocation.pathname === "/sign-up" ? 
        <HeaderButton text="Войти" link="/sign-in" /> 
        :
        <HeaderButton text="Регистрация" link="/sign-up" />
} */