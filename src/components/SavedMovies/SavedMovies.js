import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { filterMovies, filterDuration } from '../../utils/utils';


function SavedMovies({onCardDelete, handleLikeClick, savedMovies}) {
    const [isShortCard, setIsShortCard] = useState(false);
    const [filteredCards, setFilteredCards] = useState(savedMovies);
    const [query, setQuery] = useState('');
    const [notFound, setNotFound] = useState(false);

  function onSearchMovies(query) {
    setQuery(query);
  }

  function handleShortMovies() {
    setIsShortCard(!isShortCard);
  }

  useEffect(() => {
    const moviesCardList = filterMovies(savedMovies, query);
    setFilteredCards(isShortCard ? filterDuration(moviesCardList) : moviesCardList);
  }, [savedMovies, isShortCard, query]);

  useEffect(() => {
    const filteredSavedMovies = filterMovies(savedMovies, query, isShortCard);
    const notFoundCondition = filteredSavedMovies.length === 0 && query !== '';
    setNotFound(notFoundCondition);
  }, [savedMovies, query, isShortCard]);

    return (
        <main className="saved-movies">
            <SearchForm onSearchMovies={onSearchMovies} onFilter={handleShortMovies} isShortMovies={isShortCard} />
            <MoviesCardList
                cardList={filteredCards}
                onCardDelete={onCardDelete}
                handleLikeClick={handleLikeClick}
                savedMovies={savedMovies}
                isSaved={true}
                notFound={notFound}
            />
            <div className="saved-movies__gap" />
        </main>
    )
}

export default SavedMovies