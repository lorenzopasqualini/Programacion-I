fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
.then(function(res){
    return res.json();
})

.then(function(data){
console.log(data)

    let allArtists = data.artists.data;
    let contArtist = document.querySelector(".carousel-inner");
    let contadorArtist = 0;
    for (const oneArtist of allArtists) {
        contadorArtist++;
        if(contadorArtist == 1) {
            contArtist.innerHTML +=
            `<div class="item active">
                <a href= "detail.html?id=${oneArtist.id}">
                    <img src="${oneArtist.picture_xl}" alt="Deezer Artist">
                    <div class="carousel-caption">
                        <p> ${oneArtist.name} </p>
                    </div>
                </a>
            </div>`
        } else {
            contArtist.innerHTML +=
            `<div class="item">
                <a href= "detail.html?id=${oneArtist.id}">
                    <img src="${oneArtist.picture_xl}" alt="Deezer Artist">
                    <div class="carousel-caption">
                        <p> ${oneArtist.name} </p>
                    </div>
                </a>
            </div>`
        }

    }

    let allAlbums = data.albums.data;
    let contAlbum = document.querySelector(".albums");
    var contadorAlbum = 0;
    for (const oneAlbum of allAlbums) {
        contadorAlbum++;
        contAlbum.innerHTML +=
            `<div>
                <a href= "detail.html?id=${oneAlbum.id}">
                    <img src="${oneAlbum.cover_big}" alt="Deezer Album">
                </a>
            </div>`
            if(contadorAlbum == 5){
                break;
            }
    }

    let allTracks = data.tracks.data;
    let contTracks = document.querySelector(".tracks");
    var contadorTracks = 0;
    for (const oneTrack of allTracks) {
        contadorTracks++;
        contTracks.innerHTML +=
        `<div>
            <a href= "detail.html?id=${oneTrack.id}">
                <img src="${oneTrack.album.cover_big}" alt="Deezer Album">
            </a>
        </div>`
        if(contadorTracks == 5){
            break;
        }
    }

    let allPlaylists = data.playlists.data;
    let contPlaylists = document.querySelector(".playlists");
    var contadorPlaylist = 0;
    for (const onePlaylist of allPlaylists) {
        contadorPlaylist++;
        contPlaylists.innerHTML +=
            `<div>
                <a href= "playlist.html?id=${onePlaylist.id}">
                    <div class="grid-item">
                        <img src="${onePlaylist.picture_big}" alt="Deezer Playlist">
                    </div>
                </a>
            </div>`
        if(contadorPlaylist == 3){
            break;
        }
    }

})

.catch(function(error){
    console.log(error);
})
