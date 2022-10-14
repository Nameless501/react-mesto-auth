import React from 'react';

function InfoTooltip({ success=false }) {
    return(
        <section className={`popup `}>
            <div className="popup__form popup__form_type_result" >
                <div className={`popup__result-img
                    ${success ? "popup__result-img_type_success" : "popup__result-img_type_fail"}
                    `} />
                <p className="popup__result-caption">
                    {success ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}
                </p>
                <button type="reset" className="popup__close-button" />
            </div>
        </section>
    )
}

export default InfoTooltip;