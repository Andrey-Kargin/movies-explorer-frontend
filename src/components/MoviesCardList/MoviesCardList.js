import { useState, useEffect } from "react";
import MoviesCard from "../MoviesCard/MoviesCard"

function MoviesCardList({cardList, isSaved, savedMovies, onCardDelete, handleLikeClick}) {
    const [shownMovies, setShownMovies] = useState(0);

    function shownCount() {
    const display = window.innerWidth;
    if (display > 1023) {
      setShownMovies(12);
    } else if (display > 800) {
      setShownMovies(8);
    } else if (display < 800) {
      setShownMovies(5);
    }
  }

  useEffect(() => {
    shownCount();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener('resize', shownCount);
    }, 500);
  });

  function showMore() {
    const display = window.innerWidth;
    if (display > 1023) {
      setShownMovies(shownMovies + 3);
    }
    else if (display < 1023) {
      setShownMovies(shownMovies + 2);
    }
  }

  function getSavedMovieCard(savedMovies, card) {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  }

    return (
        <section className="movies-card-list">
            <ul className="movies-card-list__wrapper">
                {cardList.slice(0, shownMovies).map(card => (
                    <MoviesCard
                        key={card.id}
                        card={card}
                        isLiked={getSavedMovieCard(savedMovies, card)}
                        onCardDelete={onCardDelete}
                        handleLikeClick={handleLikeClick}
                        savedMovies={savedMovies}
                        isSaved={isSaved}/>
                ))}
            </ul>
            {cardList.length > shownMovies ?  (
            <button className="movies-card-list__more-btn" onClick={showMore}>
                Ещё
            </button>) : ''}
        </section>
    )
}

export default MoviesCardList