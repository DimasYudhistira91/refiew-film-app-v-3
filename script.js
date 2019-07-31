let movies = [];


var judulFilmDOM = document.getElementById('judul-film');
var tahunFilmDOM = document.getElementById('tahun-film');
var genreFilmDOM = document.getElementById('genre-film');
var reviewFilmDOM = document.getElementById('review-film');
var simpanDOM = document.getElementById('simpan');


simpanDOM.addEventListener('click', function(e) {
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

  movies.push(movie);
  judulFilmDOM.value = "";
  tahunFilmDOM.value = "";
  genreFilmDOM.value = "";
  reviewFilmDOM.value = "";

  localStorage.setItem('daftar-film', JSON.stringify(movies));
  }
});

