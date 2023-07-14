import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { getCards } from "../../utils/MoviesApi";
import { filterDuration } from '../../utils/utils';

function Movies({onCardDelete, handleLikeClick, savedMovies}) {
    const [ cards, setCards ] = useState([]);
    const [isShortMovies, setIsShortMovies] = useState(false);

    function handleShortMovies() {
        setIsShortMovies(!isShortMovies);
      }

    useEffect(() => {
        const getInfo = async () => {
          const res = await getCards();
          setCards(isShortMovies ? filterDuration(res) : res);
          console.log(filterDuration(res))
        };
        console.log(isShortMovies)
        getInfo();
      
      }, [isShortMovies]);

    return (
        <main className="movies">
            <SearchForm onFilter={handleShortMovies} isShortMovies={isShortMovies} />
            <MoviesCardList 
            cardList={cards}
            onCardDelete={onCardDelete}
            handleLikeClick={handleLikeClick}
            savedMovies={savedMovies}
            isSaved={false}/>
        </main>
    )
}

export default Movies