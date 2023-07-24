export function durationConverter(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
}

export function filterDuration(movies) {
  return movies.filter((movie) => movie.duration < 41);
}

export function filterMovies(movies, query) {
  const filteredMovies = movies.filter(
    (movie) =>
      movie.nameRU.toLowerCase().includes(query.toLowerCase().trim()) ||
      movie.nameEN.toLowerCase().includes(query.toLowerCase().trim())
  );
  return filteredMovies;
}

export const checkResponse = (res) => {
    if (res.ok) {
      return res.json(); //если да, то возвращает полученные данные
    }
    return Promise.reject(`Error: ${res.status}`); //иначе возвращает ошибку
  };
  