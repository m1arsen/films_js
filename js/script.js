const numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
  count: numbersOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};


for (let i = 0; i < 2; i++) {
  personalMovieDB.movies[prompt('Один из просмотренных фильмов?')] = +prompt('На сколько оцените его?');
}

console.log(personalMovieDB);