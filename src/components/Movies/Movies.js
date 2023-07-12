import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";


import { cardList } from '../../utils/constants.js';

function Movies(props) {
    const [ cards, setCards ] = useState([]);

    useEffect(() => {
            setCards(cardList);
    }, [])

    return (
        <main className="movies">
            <SearchForm />
            <MoviesCardList 
            cardList={cards}
            isSave={true}/>
        </main>
    )
}

export default Movies