import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as auth from '../utils/Auth';

function Login({ setLoginStatus }) {
    const history = useHistory();

    const [email, setEmail] = useState({
        value: '',
        isValid: false,
        validationMsg: ''
    });

    const [password, setPassword] = useState({
        value: '',
        isValid: false,
        validationMsg: ''
    });

    const [formIsValid, setFormValidity] = useState(false);

    function handleChange(evt) {
        let callBack = evt.target.name === 'email' ? setEmail : setPassword;
        
        if (evt.target.validity.valid) {
            callBack({
                value: evt.target.value,
                isValid: true,
                validationMsg: ''
            });
        } else {
            callBack({
                value: evt.target.value,
                isValid: false,
                validationMsg: evt.target.validationMessage
            });
        }
    }

    useEffect(() => {
        email.isValid && password.isValid ? setFormValidity(true) : setFormValidity(false);
    },
    [email, password])

    useEffect(() => {
        setEmail({
            value: '',
            isValid: false,
            validationMsg: ''
        });
        setPassword({
            value: '',
            isValid: false,
            validationMsg: ''
        });
    },
    [])

    function handleSubmit(evt) {
        evt.preventDefault();

        auth.login(password.value, email.value)
            .then(res => {
                if(res) {
                    setLoginStatus(true);
                    history.push('/');
                }
            });
    }

    return(
        <section className="sign content__sign">
            <form 
                name='sign-in' 
                className="sign__form"
                onSubmit={handleSubmit}
                noValidate
            >
                <fieldset className="sign__fieldset">
                    <legend className="sign__title">
                        Вход
                    </legend>
                    <input 
                        type="email" 
                        name="email" 
                        id="email-input" 
                        className="sign__input" 
                        placeholder="Email" 
                        onChange={handleChange}
                        value={email.value}
                        required
                    />
                    <span className="sign__error-message" >
                        {email.validationMsg}
                    </span>
                    <input
                        type="text" 
                        name="password" 
                        id="password-input" 
                        className="sign__input" 
                        minLength="5" 
                        maxLength="16" 
                        placeholder="Пароль"
                        onChange={handleChange}
                        value={password.value}
                        required
                    />
                    <span className="sign__error-message" >
                        {password.validationMsg}
                    </span>
                    <button
                        type="submit" 
                        className={
                            `sign__submit-button 
                            ${!formIsValid && "sign__submit-button_disabled"}`
                        } 
                        disabled={!formIsValid}
                    >
                        Войти
                    </button>
                </fieldset>
            </form>
        </section>
    );
}

export default Login;