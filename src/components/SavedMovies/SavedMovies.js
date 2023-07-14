import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { getCards } from "../../utils/MoviesApi";


function SavedMovies({onCardDelete, handleLikeClick, savedMovies}) {
    const [ savedCards, setSavedCards ] = useState(savedMovies);

    useEffect(() => {
        const getInfo = async () => {
           getCards(savedCards);


        };
        getInfo();
      
      }, []);

    return (
        <main className="saved-movies">
            <SearchForm />
            <MoviesCardList
                cardList={savedCards}
                onCardDelete={onCardDelete}
                handleLikeClick={handleLikeClick}
                savedMovies={savedMovies}
                isSaved={true}
            />
            <div className="saved-movies__gap" />
        </main>
    )
}

export default SavedMovies