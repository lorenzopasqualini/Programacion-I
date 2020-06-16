let queryString = window.location.search;
let objetoQuery = new URLSearchParams(queryString);
let playlistId = objetoQuery.get("id")

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/" + playlistId)
.then(function(res){
    return res.json();
})

.then(function(data){

    let allPlaylistTracks = data.tracks.data;
    console.log(allPlaylistTracks);

    let contPlaylist = document.querySelector(".deezerPlaylist");
    for (const onePlaylistTrack of allPlaylistTracks) {
        contPlaylist.innerHTML +=
            `<div class="eachPlaylist">
                <a href="javascript:;" class="button"> <i class="fas fa-folder-plus"></i> </a>
                <a href="detail.html?=${onePlaylistTrack.album.id}">
                    <div>
                        <img src="${onePlaylistTrack.album.cover}" alt="Track">
                        <p> ${onePlaylistTrack.title} </p>
                    </div>
                </a>
                <a href="detail.html?=${onePlaylistTrack.artist.id}">
                    <p> ${onePlaylistTrack.artist.name} </p>
                </a>
            </div>`
    }

})

.catch(function(error){
    console.log(error);
})