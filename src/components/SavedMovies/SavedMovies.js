import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


import { savedCardList } from '../../utils/constants.js';

function SavedMovies() {
    const [ savedCards, setSavedCards ] = useState([]);

    useEffect(() => {
            setSavedCards(savedCardList);
    }, [])

    return (
        <main className="saved-movies">
            <SearchForm />
            <MoviesCardList
            isSave={false}
            cardList={savedCards}/>
            <div className="saved-movies__gap" />
        </main>
    )
}

export default SavedMovies