import { useEffect, useRef, useState } from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const inputRef = useRef();

    const [isValid, setValidity] = useState({valid: false, msg: ''});

    function handleSubmit(evt) {
        evt.preventDefault();

        onUpdateAvatar({
            avatar: inputRef.current.value
        });
    }

    function handleValidation() {
      if (inputRef.current.validity.valid) {
          setValidity({valid: true, msg: ''})
      } else {
          setValidity({valid: false, msg: inputRef.current.validationMessage})
      }
    }

    useEffect(() =>{
      inputRef.current.value = '';
      setValidity({valid: false, msg: ''});
    }, [isOpen])

    return(
        <PopupWithForm 
          name="avatar" 
          title="Обновить аватар" 
          buttonText="Сохранить" 
          isOpen={isOpen} 
          onClose={onClose} 
          onSubmit={handleSubmit} 
          isValid={isValid.valid} 
        >
          <>
            <input 
              ref={inputRef} 
              type="url" 
              name="avatar" 
              placeholder="Ссылка на картинку" 
              id="avatar-input" 
              className="popup__input popup__input_type_link" 
              required 
              onChange={handleValidation} 
            />
            <span 
            className={`popup__error-message ${
              (!isValid.valid && isOpen) ? 
                "popup__error-message_visible" : "popup__error-message_hidden"
              }`} 
            >
              {isValid.msg}
            </span>
          </>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;