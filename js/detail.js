let queryString = window.location.search;
let objetoQuery = new URLSearchParams(queryString);
let detailId = objetoQuery.get("artistid")
let generoId = objetoQuery.get("generoid")
let albumId = objetoQuery.get("albumid")
let trackId = objetoQuery.get("trackid")
console.clear();


//Get Artist info

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/13")
.then(function(res){
    return res.json();
})

.then(function(data){

    let artistDetail = data;
    let artistImg = document.querySelector(".artist-img");
    artistImg.innerHTML = "<img src='" +artistDetail.picture_big + "' atl='Artista'>";

    let artistInfo = document.querySelector(".artist-text");
    artistInfo.innerHTML = "<h2>" + artistDetail.name + "</h2><h3>Genero: R&B Classic Rock</h3><h3>Albunes: " + artistDetail.nb_album + "</h3><p> </p>"

    let socialArtist = document.querySelector(".socialartist");
    socialArtist.innerHTML = "<a href='" + artistDetail.share + "'> <i class='fa fa-share-alt' aria-hidden='true'></i></a>  <a href='" + artistDetail.tracklist + "' target='_blank'>  <i class='far fa-list-music'></i> </a>";

})

.catch(function(error){
    console.info("Error Ocurrido")
    console.log(error);
})





//Get Album Info






//Get track Info





//Get Genero Info