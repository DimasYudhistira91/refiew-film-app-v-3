let rowDOM = document.getElementById('tbody');

let judulDOM = document.getElementById('judul-film');
let tahunDOM = document.getElementById('tahun-film');
let genreDOM = document.getElementById('genre-film');
let reviewDOM = document.getElementById('review-film');

let allList = localStorage.getItem('daftar-film');

let allListJson = JSON.parse(allList);

console.log(allListJson);

if(allListJson.length > 0) {

for(i in allListJson) {
  rowDOM.innerHTML += '<tr><th id="judul-film" scope="row">' + allListJson[i].judul + '</th><td id="tahun-film">' + allListJson[i].tahun + '</td><td id="genre-film">' + allListJson[i].genre + '</td><td id="review-film">' + allListJson[i].review + '</td></tr>';
}

}