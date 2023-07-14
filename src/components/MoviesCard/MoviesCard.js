import React, { useState } from "react";

import { durationConverter } from '../../utils/utils';

function MoviesCard({card, isLiked, onCardDelete, handleLikeClick, isSaved, savedMovies}) {
    function onCardClick() {
        if (isLiked) {
          onCardDelete(savedMovies.filter((m) => m.movieId === card.id)[0]);
        } else {
          handleLikeClick(card);
        }
      }
    
      function onDelete() {
        onCardDelete(card);
      }

    const cardLikeButtonClassName = ( `movies-card__save-btn ${isLiked && 'movies-card__save-btn_active'}` );
   
    return (
        <li className='movies-card'>
            <a href={card.trailerLink} target="_blank" rel="noreferrer">
                <img src={isSaved ? card.image : `https://api.nomoreparties.co/${card.image.url}`} alt={card.nameRU} className='movies-card__image' />
            </a>
            <div className='movies-card__description'>
                <div className='movies-card__text'>
                    <h2 className='movies-card__name'>
                        {card.nameRU}
                    </h2>
                    <p className='movies-card__duration'>
                    {durationConverter(card.duration)}
                    </p>
                </div>

                {isSaved ? <button onClick={onDelete} className='movies-card__delete-btn' /> : <button type="button" onClick={onCardClick} className={cardLikeButtonClassName}/>}
            </div>
            
 
        </li>
    )
}

export default MoviesCard