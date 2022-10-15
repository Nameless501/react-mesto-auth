import { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const [name, setName] = useState({
        value: '',
        isValid: false,
        validationMsg: ''
    });

    const [link, setLink] = useState({
        value: '',
        isValid: false,
        validationMsg: ''
    });

    const [formIsValid, setFormValidity] = useState(false);

    function handleChange(evt) {
        let callBack = evt.target.name === 'name' ? setName : setLink;
        
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

    function handleSubmit(evt) {
        evt.preventDefault();
        
        onAddPlace({
            name: name.value,
            link: link.value
        })
    }

    useEffect(() => {
        name.isValid && link.isValid ? setFormValidity(true) : setFormValidity(false);
    },
    [name, link])

    useEffect(() => {
        setName({
            value: '',
            isValid: false,
            validationMsg: ''
        });
        setLink({
            value: '',
            isValid: false,
            validationMsg: ''
        });
    }, [isOpen])

    return(
        <PopupWithForm 
            name="add" 
            title="Новое место" 
            buttonText="Создать" 
            isOpen={isOpen} 
            onClose={onClose} 
            onSubmit={handleSubmit} 
            isValid={formIsValid} 
        >
            <>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Название" 
                    id="place-input" 
                    className="popup__input popup__input_type_place" 
                    required 
                    minLength="2" 
                    maxLength="30" 
                    onChange={handleChange} 
                    value={name.value} 
                />
                <span 
                    className={`popup__error-message ${
                        (!name.isValid && isOpen) ? 
                            "popup__error-message_visible" : "popup__error-message_hidden"
                        }`} 
                >
                    {name.validationMsg}
                </span>
                <input 
                    type="url" 
                    name="link" 
                    placeholder="Ссылка на картинку" 
                    id="link-input" 
                    className="popup__input popup__input_type_link" 
                    required 
                    onChange={handleChange} 
                    value={link.value} 
                />
                <span 
                    className={`popup__error-message ${
                        (!link.isValid && isOpen) ? 
                            "popup__error-message_visible" : "popup__error-message_hidden"
                        }`} 
                >
                    {link.validationMsg}
                </span>
            </>
        </PopupWithForm>
    )
}

export default AddPlacePopup;