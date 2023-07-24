import { useState, useEffect } from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { getCards } from "../../utils/MoviesApi";
import { filterMovies,filterDuration } from '../../utils/utils';

function Movies({onCardDelete, handleLikeClick, savedMovies}) {
  const [initialCards, setInitialCards] = useState([]);
  const [isShortCard, setIsShortCard] = useState(false);
  const [filteredCards, setFilteredCards] = useState([]);
  const [preloader, setPreloader] = useState(false);
  const [notFound, setNotFound] = useState(false);

  // Функция для фильтрации и обновления списка фильмов
  function handleFilterMovies(movies, query, short) {
    const moviesCardList = filterMovies(movies, query, short);
    setInitialCards(moviesCardList);
    setFilteredCards(short ? filterDuration(moviesCardList) : moviesCardList);
    localStorage.setItem('movies', JSON.stringify(moviesCardList));
    localStorage.setItem('allMovies', JSON.stringify(movies));
  }

  // Функция переключения короткометражных фильмов
  function handleShortMovies() {
    const newShortCardValue = !isShortCard;
    setIsShortCard(newShortCardValue);
    setFilteredCards(newShortCardValue ? filterDuration(initialCards) : initialCards);
    localStorage.setItem('short', newShortCardValue);
  }

  // Функция поиска фильмов по запросу
  function onSearchMovies(query) {
    localStorage.setItem('moviesSearch', query);
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));

    if (allMovies) {
      handleFilterMovies(allMovies, query, isShortCard);
    } else {
      setPreloader(true);
      getCards()
        .then((data) => {
          handleFilterMovies(data, query, isShortCard);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setPreloader(false);
        });
    }
  }

  useEffect(() => {
    const short = localStorage.getItem('short') === 'true';
    setIsShortCard(short);
  }, []);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('movies'));
    setInitialCards(movies || []);
    setFilteredCards(isShortCard ? filterDuration(movies) : movies || []);
  }, [isShortCard]);

  useEffect(() => {
    setNotFound(filteredCards.length === 0 && localStorage.getItem('moviesSearch'));
  }, [filteredCards]);

    return (
        <main className="movies">
            <SearchForm onSearchMovies={onSearchMovies} onFilter={handleShortMovies} isShortMovies={isShortCard} />
            <MoviesCardList 
            cardList={filteredCards}
            onCardDelete={onCardDelete}
            handleLikeClick={handleLikeClick}
            savedMovies={savedMovies}
            isSaved={false}
            preloader={preloader}
            notFound={notFound}/>
        </main>
    )
}

export default Movies