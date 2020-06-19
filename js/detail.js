let queryDetail = window.location.search;
let objetoDetail = new URLSearchParams(queryDetail);
let artistId = objetoDetail.get("artistid");
let generoId = objetoDetail.get("generoid");
let albumId = objetoDetail.get("albumid");
let trackId = objetoDetail.get("trackid");

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

        console.log(data);

        let artistDetail = data;
        let artistImg = document.querySelector(".artist-img");
        artistImg.innerHTML = "<img src='" + artistDetail.picture_big + "' atl='Artista'>";

        let artistInfo = document.querySelector(".artist-text");
        artistInfo.innerHTML = "<h2>" + artistDetail.name + "</h2> <h3> Followers: " + artistDetail.nb_fan + "</h3> <h3> Albums: " + artistDetail.nb_album + "</h3>"
    })

    .catch(function(error){
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
        artistInfo.innerHTML = `<h2>${artistDetail.name}</h2> <h3> Genre: <a href='detail.html?generoid=${data.genre_id}'>${data.genres.data[0].name} </a> </h3> <h3> Album Tracks: ${data.nb_tracks} </h3> <h3> Album Likes: ${data.fans} </h3>`;

        let tracksData = data.tracks.data;
        let albumInfo = document.querySelector(".album-name");
        albumInfo.innerHTML = `<div class="title-img"> <img src='${data.cover_medium}' width='200'> <div> <h3> <a href='detail.html?albumid=${data.id}' style='color:#000000!important;'>${data.title} </a> </h3> <h4 style='color:inherit; font-size: 10px;'> Release Date: ${data.release_date} <h4> </div> </div>`;
        albumInfo.innerHTML += `<table> <tr> <th width='80%'> Song Name </th> <th> Duration </th> </tr>`;
                               
        for (const track of tracksData){
            let duration = (track.duration / 60).toFixed(2);
            albumInfo.innerHTML += `<table> <tr> <td width='80%'>${track.title}</td><td>${duration} </td>
            <td><audio id="${track.id}" src="${track.preview}" preload="auto"></audio>
            <div id="playButton">
              <button onclick="document.getElementById(${track.id}).play()"><i class='far fa-play-circle'></i></button>
              <button onclick="document.getElementById(${track.id}).pause()"><i class="far fa-pause-circle"></i></button>
              <button onclick="document.getElementById(${track.id}).volume+=0.1"><i class="fas fa-volume-up"></i></button>
              <button onclick="document.getElementById(${track.id}).volume-=0.1"><i class="fas fa-volume-down"></i></button>
              <button> <a href="javascript:;" class="button"> <i class="fas fa-folder-plus"></i> </a> </button>
            </div> 
            </td></tr>`;
        }

        let allButtons = document.querySelectorAll(".button");
        for (const oneButton of allButtons) {
            oneButton.onclick = function() {
                alert("Este Track fue agregado a MyPlaylist.")
                let stringPlaylist = window.localStorage.getItem("addPlaylist");
                let jsonPlaylist = JSON.parse(stringPlaylist);
                if (!jsonPlaylist) {
                    jsonPlaylist = [];
                }
                jsonPlaylist.push(data);
                window.localStorage.setItem("addPlaylist", JSON.stringify(jsonPlaylist));
            }
        }
    })

    .catch(function(error){
        console.log(error);
    })
}

//Get Track Info
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
        artistInfo.innerHTML = `<h2>${artistDetail.name}</h2> <h3> Album Title: ${data.album.title} </h3> <h3> Track Position in Album: ${data.track_position} </h3> <h3> Beats per Minute: ${data.bpm} </h3>`;

        let albumDetail = data.album;
        let duration = (data.duration / 60).toFixed(2);
        let albumInfo = document.querySelector(".album-name");
        albumInfo.innerHTML = ` <h3> <a href='detail.html?albumid=${albumDetail.id}' style='color:#000000!important;'>${albumDetail.title}</a> </h3> <h4 style='color:inherit; font-size: 10px;'> Release Date: ${albumDetail.release_date}<h4>`;
        albumInfo.innerHTML += `<table> <tr> <th rowspan='4' width='15%'><img src='${albumDetail.cover_medium}' width='150'></th><th width='60%'> Song Name </th> <th> Duration </th> </tr>
                                <tr> <td> ${data.title} </td> <td> ${duration} </td>
                                <td> <audio id="${data.id}" src="${data.preview}" preload="auto"> </audio>
            <div id="playButton">
                <button onclick="document.getElementById(${data.id}).play()"> <i class='far fa-play-circle'></i> </button>
                <button onclick="document.getElementById(${data.id}).pause()"> <i class="far fa-pause-circle"></i> </button>
                <button onclick="document.getElementById(${data.id}).volume+=0.1"> <i class="fas fa-volume-up"></i> </button>
                <button onclick="document.getElementById(${data.id}).volume-=0.1"> <i class="fas fa-volume-down"></i> </button>
                <button> <a href="javascript:;" class="button"> <i class="fas fa-folder-plus"></i> </a> </button>
            </div> 
            </td></tr></table></div>`;

            let allButtons = document.querySelectorAll(".button");
            for (const oneButton of allButtons) {
                oneButton.onclick = function() {
                    alert("Este Track fue agregado a MyPlaylist.")
                    let stringPlaylist = window.localStorage.getItem("addPlaylist");
                    let jsonPlaylist = JSON.parse(stringPlaylist);
                    if (!jsonPlaylist) {
                        jsonPlaylist = [];
                    }
                    jsonPlaylist.push(data);
                    window.localStorage.setItem("addPlaylist", JSON.stringify(jsonPlaylist));
                }
            }
    })

    .catch(function(error){
        console.log(error);
    })
}

//Get Genre Info
function generoDetail(generoId){
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + generoId)
    .then(function(res){
        return res.json();
    })

    .then(function(data){

        console.log(data)

        let generoDetail = data;
        let generoImg = document.querySelector(".artist-img");
        generoImg.innerHTML = "<img src='" + generoDetail.picture_medium + "' atl='generoa'>";

        let generoInfo = document.querySelector(".artist-text");
        generoInfo.innerHTML = "<h2> Genre: " + generoDetail.name + "</h2>"
    })

    .catch(function(error){
        console.log(error);
    })
}