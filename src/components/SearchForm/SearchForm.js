import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({onSearchMovies, onFilter, isShortMovies}) {
    const [query, setQuery] = useState('');
  const [emptyQuery, setEmptyQuery] = useState(false);
  const location = useLocation();

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (query.trim().length === 0) {
      setEmptyQuery(true);
    } else {
      setEmptyQuery(false);
      onSearchMovies(query);
    }
  }

  useEffect(() => {
    if (location.pathname === '/movies' && localStorage.getItem('moviesSearch')) {
      const localQuery = localStorage.getItem('moviesSearch');
      setQuery(localQuery);
    }
  }, [location]);

    return (
        <section className="search-form">
            <form name="search" className="search-form__wrapper" onSubmit={handleSubmit}>
                <input onChange={handleChange} value={query} name="search" className="search-form__input" type="text" placeholder="Фильм" />
                <button type="submit" className="search-form__btn"></button>
            </form>
            {emptyQuery && <span className="search-form__tip">Нужно ввести ключевое слово</span>}
            <FilterCheckbox onFilter={onFilter} isShortMovies={isShortMovies}/>
        </section>
    )
}

export default SearchForm