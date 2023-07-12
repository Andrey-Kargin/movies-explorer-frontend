import React, { useState } from "react";

import { durationConverter } from '../../utils/utils';

function MoviesCard({name, duration, image, isSave}) {
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    const cardLikeButtonClassName = ( `movies-card__save-btn ${!isActive && 'movies-card__save-btn_active'}` );
   
    return (
        <li className='movies-card'>
            <img src={image} alt={name} className='movies-card__image' />
            <div className='movies-card__description'>
                <div className='movies-card__text'>
                    <h2 className='movies-card__name'>
                        {name}
                    </h2>
                    <p className='movies-card__duration'>
                    {durationConverter(duration)}
                    </p>
                </div>

                {!isSave ? <button className='movies-card__delete-btn' /> : <button onClick={handleToggle} className={cardLikeButtonClassName}/>}
            </div>
            
 
        </li>
    )
}

export default MoviesCard