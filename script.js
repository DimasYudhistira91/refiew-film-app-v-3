let movies = [];
console.log(movies);

let judulFilmDOM = document.getElementById('judul-film');
let tahunFilmDOM = document.getElementById('tahun-film');
let genreFilmDOM = document.getElementById('genre-film');
let reviewFilmDOM = document.getElementById('review-film');
let rowDOM = document.getElementById('tbody');
let simpanDOM = document.getElementById('simpan');

let allList = localStorage.getItem('baris-film');
let allListJson = JSON.parse(allList);
rowDOM.innerHTML = allListJson;

simpanDOM.addEventListener('click', (e) => {
  e.preventDefault();

  if(judulFilmDOM.value === "",
  tahunFilmDOM.value === "",
  genreFilmDOM.value === "",
  reviewFilmDOM.value === "") {
    alert('ada yang belum di isi');

  } else {
  
  let movie = {
  judul : judulFilmDOM.value,
  tahun : tahunFilmDOM.value,
  genre : genreFilmDOM.value,
  review : reviewFilmDOM.value
  }

  rowDOM.innerHTML += '<tr><th id="judul-film" scope="row">' + movie.judul + '</th><td id="tahun-film">' + movie.tahun + '</td><td id="genre-film">' + movie.genre + '</td><td id="review-film">' + movie.review + '</td></tr>';

  movies.push(movie);
  judulFilmDOM.value = "";
  tahunFilmDOM.value = "";
  genreFilmDOM.value = "";
  reviewFilmDOM.value = "";

  localStorage.setItem('baris-film', JSON.stringify(rowDOM.innerHTML));
  }
});