import { useState } from "react";
import MoviesCard from "../MoviesCard/MoviesCard"

function MoviesCardList({cardList, isSave}) {
    const [shownMovies, setShownMovies] = useState(12);

    function showMore() {
        setShownMovies(shownMovies + 12)
    }

    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__wrapper">
                {cardList.slice(0, shownMovies).map(card => (
                    <MoviesCard
                        key={card.id}
                        duration={card.duration}
                        image={card.image}
                        name={card.name}
                        isSave={isSave}/>
                ))}
            </ul>
            {isSave ? (
            <button className="movies-card-list__more-btn" onClick={showMore}>
                Ещё
            </button>) : ''}
        </section>
    )
}

export default MoviesCardList