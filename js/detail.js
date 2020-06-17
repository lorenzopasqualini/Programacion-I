let queryString = window.location.search;
let objetoQuery = new URLSearchParams(queryString);
let artistId = objetoQuery.get("artistid")
let generoId = objetoQuery.get("generoid")
let albumId = objetoQuery.get("albumid")
let trackId = objetoQuery.get("trackid")

if(trackId != null){
    trackDetail(trackId);
} else if(albumId != null){
    albumDetail(albumId);
} else if(generoId != null){
    generoDetail(generoId);
} else if(artistId != null){
    artistDetail(artistId);
}

//Get Artist info
function artistDetail(artistId){
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + artistId)
    .then(function(res){
        return res.json();
    })

    .then(function(data){

        let artistDetail = data;
        let artistImg = document.querySelector(".artist-img");
        artistImg.innerHTML = "<img src='" + artistDetail.picture_big + "' atl='Artista'>";

        let artistInfo = document.querySelector(".artist-text");
        artistInfo.innerHTML = "<h2>" + artistDetail.name + "</h2>"

    })

    .catch(function(error){
        console.info("Error Ocurrido")
        console.log(error);
    })


}

//Get Album Info
function albumDetail(albumId){
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + albumId)
    .then(function(res){
        return res.json();
    })

    .then(function(data){

        console.log(data)

        let artistDetail = data.artist;
        let artistImg = document.querySelector(".artist-img");
        artistImg.innerHTML = `<img src='${artistDetail.picture_medium}' atl='Artista'>`;

        let artistInfo = document.querySelector(".artist-text");
        artistInfo.innerHTML = `<h2>${artistDetail.name}</h2> <h3> Género: <a href='detail.html?generoid=${data.genre_id}'> ${data.genres.data[0].name} </a> </h3>`;

        let tracksData = data.tracks.data;
        let albumInfo = document.querySelector(".album-name");
        albumInfo.innerHTML = `<div class='col-md-3'><img src='${data.cover_medium}' width='200'></div><div class='col-md-6'><h3><a href='detail.html?albumid=${data.id}' style='color:#337ab7!important;'>${data.title}</a></h3><h4 style='color:inherit'>Ano: ${data.release_date}<h4></div>`;
        albumInfo.innerHTML += `<table><tr><th width='80%'>Nombre Cancion</th><th>duration</th><th></th></tr>`;
                               
        for (const track of tracksData){
            let duration = (track.duration / 60).toFixed(2);
            albumInfo.innerHTML += `<table><tr><td width='80%'>${track.title}</td><td>${duration}</td>
            <td><audio id="${track.id}" src="${track.preview}" preload="auto"></audio>
            <div>
              <button onclick="document.getElementById(${track.id}).play()"><i class='far fa-play-circle'></i></button>
              <button onclick="document.getElementById(${track.id}).pause()"><i class="far fa-pause-circle"></i></button>
              <button onclick="document.getElementById(${track.id}).volume+=0.1"><i class="fas fa-volume-up"></i></button>
              <button onclick="document.getElementById(${track.id}).volume-=0.1"><i class="fas fa-volume-down"></i></button>
            </div> 
            </td></tr>`;

        }

        albumInfo.innerHTML += `</table></div>`;
    })

    .catch(function(error){
        console.info("Error Ocurrido")
        console.log(error);
    })


}

//Get track Info
function trackDetail(trackId){
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + trackId)
    .then(function(res){
        return res.json();
    })

    .then(function(data){

        console.log(data)

        let artistDetail = data.artist;
        let artistImg = document.querySelector(".artist-img");
        artistImg.innerHTML = `<img src='${artistDetail.picture_medium}' atl='Artista'>`;

        let artistInfo = document.querySelector(".artist-text");
        artistInfo.innerHTML = `<h2>${artistDetail.name}</h2>`;

        let albumDetail = data.album;
        let duration = (data.duration / 60).toFixed(2);
        let albumInfo = document.querySelector(".album-name");
        albumInfo.innerHTML = `<h3><a href='detail.html?albumid=${albumDetail.id}' style='color:#337ab7!important;'>${albumDetail.title}</a></h3><h4 style='color:inherit'>Ano: ${albumDetail.release_date}<h4>`;
        albumInfo.innerHTML += `<table><tr><th rowspan='4' width='15%'><img src='${albumDetail.cover_medium}' width='200'></th><th width='80%'>Nombre Cancion</th><th>duration</th><th></th></tr>
                                <tr><td>${data.title}</td><td>${duration}</td><td><i class='far fa-play-circle'></i> play</td></tr></table></div>`;
var audio = new Audio(data.preview);
audio.play();
    })

    .catch(function(error){
        console.info("Error Ocurrido")
        console.log(error);
    })


}

//Get Genero Info
function generoDetail(generoId){
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + generoId)
    .then(function(res){
        return res.json();
    })

    .then(function(data){

        console.log(data)

        let generoDetail = data;
        let generoImg = document.querySelector(".artist-img");
        generoImg.innerHTML = "<img src='" +generoDetail.picture_medium + "' atl='generoa'>";

        let generoInfo = document.querySelector(".artist-text");
        generoInfo.innerHTML = "<h2>Genero: " + generoDetail.name + "</h2>"

        // let socialgenero = document.querySelector(".socialartist");
        // socialgenero.innerHTML = "<a href='" + generoDetail.share + "'> <i class='fa fa-share-alt' aria-hidden='true'></i></a>  <a href='" + artistDetail.tracklist + "' target='_blank'>  <i class='far fa-list-music'></i> </a>";

    })

    .catch(function(error){
        console.info("Error Ocurrido")
        console.log(error);
    })


}