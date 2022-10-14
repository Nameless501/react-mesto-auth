import { useContext } from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cardsData, onCardLike, onCardDelete }) {
    const currentUser = useContext(CurrentUserContext);

    return(
        <div className='content'>
            <section className="profile content__profile">
                <div style={{ backgroundImage: `url(${currentUser.avatar})` }} className="profile__avatar" />
                <a src="#" className="profile__avatar-cover" onClick={onEditAvatar} />
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button type="button" className="profile__edit-button" onClick={onEditProfile} />
                    <p className="profile__job">{currentUser.about}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace} />
            </section>
            <section className="elements content__elements">
                <ul className="elements__gallery">
                    {cardsData.map(currentCard => {
                        return (
                            <Card card={currentCard} key={currentCard._id} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />
                        )
                    })}
                </ul>
            </section>
        </div>
    );
}

export default Main;