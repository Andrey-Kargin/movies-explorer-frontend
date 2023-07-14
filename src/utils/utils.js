export function durationConverter(duration) {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours}ч ${minutes}м`;
}

export function filterDuration(movies) {
  return movies.filter((movie) => movie.duration < 41);
}

export const checkResponse = (res) => {
    if (res.ok) {
      return res.json(); //если да, то возвращает полученные данные
    }
    return Promise.reject(`Error: ${res.status}`); //иначе возвращает ошибку
  };
  