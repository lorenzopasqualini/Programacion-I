fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
.then(function(res){
    return res.json();
})

.then(function(data){
console.log(data)

    let allArtists = data.artists.data;
    let contArtist = document.querySelector(".carousel-inner");
    for (const oneArtist of allArtists) {
    contArtist.innerHTML +=
        `<div class="item active">
            <a href="">
                <img src="${oneArtist.picture_big}" alt="Deezer Artist">
                <div class="carousel-caption">
                    <p> ${oneArtist.name} </p>
                </div>
            </a>
        </div>`
    }

    let allAlbums = data.albums.data;
    let contAlbum = document.querySelector(".albums");
    for (const oneAlbum of allAlbums) {
        contAlbum.innerHTML +=
            `<div>
                <a href=""> <img src="${oneAlbum.cover_medium}" alt="Deezer Album"> </a>
            </div>`
    }

    let allTracks = data.tracks.data;
    let contTracks = document.querySelector(".tracks");
    for (const oneTrack of allTracks) {
        contTracks.innerHTML +=
            `<div>
                <a href=""> <p> ${oneTrack.title}</p> </a>
            </div>`                  
    }

})

.catch(function(error){
    console.log(error);
})
