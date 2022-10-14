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

    function handleNameChange(evt) {
        if (evt.target.validity.valid) {
            setName({
                value: evt.target.value,
                isValid: true,
                validationMsg: ''
            });
        } else {
            setName({
                value: evt.target.value,
                isValid: false,
                validationMsg: evt.target.validationMessage
            });
        }
    }

    function handleLinkChange(evt) {
        if (evt.target.validity.valid) {
            setLink({
                value: evt.target.value,
                isValid: true,
                validationMsg: ''
            });
        } else {
            setLink({
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

    function handleFormValidity() {
        name.isValid && link.isValid ? setFormValidity(true) : setFormValidity(false);
    }

    useEffect(() => {
        handleFormValidity();
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
        <PopupWithForm name="add" title="Новое место" buttonText="Создать" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} isValid={formIsValid} >
            <>
                <input type="text" name="name" placeholder="Название" id="place-input" className="popup__input popup__input_type_place" required minLength="2" maxLength="30" onChange={handleNameChange} value={name.value} />
                <span className={`popup__error-message ${(!name.isValid && isOpen) ? "popup__error-message_visible" : "popup__error-message_hidden"}`} >
                    {name.validationMsg}
                </span>
                <input type="url" name="link" placeholder="Ссылка на картинку" id="link-input" className="popup__input popup__input_type_link" required onChange={handleLinkChange} value={link.value} />
                <span className={`popup__error-message ${(!link.isValid && isOpen) ? "popup__error-message_visible" : "popup__error-message_hidden"}`} >
                    {link.validationMsg}
                </span>
            </>
        </PopupWithForm>
    )
}

export default AddPlacePopup;