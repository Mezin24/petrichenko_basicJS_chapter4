'use strict';

const films = [
  {
    name: 'Titanic',
    rating: 9,
  },
  {
    name: 'Die hard 5',
    rating: 5,
  },
  {
    name: 'Matrix',
    rating: 8,
  },
  {
    name: 'Some bad film',
    rating: 4,
  },
];

function showGoodFilms(arr) {
  return arr.filter((film) => film.rating >= 8);
}

function showListOfFilms(arr) {
  return arr.map((film) => film.name).join(', ');
}

function setFilmsIds(arr) {
  const filmsWithId = [...arr];
  filmsWithId.forEach((film, i) => (film.id = i));
  return filmsWithId;
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
  return arr.every((film) => film.id);
}

console.log(checkFilms(tranformedArray));
