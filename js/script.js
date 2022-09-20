'use strict';

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '').trim();

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', '').trim();
    }
  },
  rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из просмотренных фильмов?').trim(),
            b = +prompt('На сколько оцените его?').trim();

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      alert("Вы киноман");
    } else {
      alert("Произошла ошибка");
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i < 4; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      if (genre === '' || genre == null) {
        console.log('Вы ввели некорректные данные или не ввели их вообще');
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genre;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${item}`);
    });
  }

};