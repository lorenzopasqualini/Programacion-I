fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
.then(function(res){
    return res.json();
})

.then(function(data){
console.log(data)

    let allArtists = data.artists.data;
    let contArtist = document.querySelector(".carousel-inner");
    let contador = 0;
    for (const oneArtist of allArtists) {
        contador++;
        if(contador == 1) {
            contArtist.innerHTML +=
            `<div class="item active">
                <a href= "detail.html?id=${oneArtist.id}">
                    <img src="${oneArtist.picture_big}" alt="Deezer Artist">
                    <div class="carousel-caption">
                        <p> ${oneArtist.name} </p>
                    </div>
                </a>
            </div>`
        } else {
            contArtist.innerHTML +=
            `<div class="item">
                <a href= "detail.html?id=${oneArtist.id}">
                    <img src="${oneArtist.picture_big}" alt="Deezer Artist">
                    <div class="carousel-caption">
                        <p> ${oneArtist.name} </p>
                    </div>
                </a>
            </div>`
        }

    }

    let allAlbums = data.albums.data;
    let contAlbum = document.querySelector(".albums");
    for (const oneAlbum of allAlbums) {
        contAlbum.innerHTML +=
            `<div>
                <a href= “detail.html?id=${oneAlbum.id}”>
                    <img src="${oneAlbum.cover_big}" alt="Deezer Album">
                </a>
            </div>`
    }

    let allTracks = data.tracks.data;
    let contTracks = document.querySelector(".tracks");
    for (const oneTrack of allTracks) {
        contTracks.innerHTML +=
        `<div>
            <a href= “detail.html?id=${oneTrack.id}”>
                <img src="${oneTrack.album.cover_big}" alt="Deezer Album">
            </a>
        </div>`
    }

    let allPlaylists = data.playlists.data;
    let contPlaylists = document.querySelector(".playlists")
    for (const onePlaylist of allPlaylists) {
        contPlaylists.innerHTML +=
            `<div>
                <a href= “playlist.html?id=${onePlaylist.id}”>
                    <div class="grid-item">
                        <img src="${onePlaylist.picture_big}" alt="Deezer Playlist">
                    </div>
                </a>
            </div>`
    }

})

.catch(function(error){
    console.log(error);
})
