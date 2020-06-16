let queryString = window.location.search;
let objetoQuery = new URLSearchParams(queryString);
let playlistId = objetoQuery.get("id")

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/" + playlistId)
.then(function(res){
    return res.json();
})

.then(function(data){

    let allPlaylistTracks = data.tracks.data;
    let contPlaylist = document.querySelector(".playlist");
    for (const onePlaylistTrack of allPlaylistTracks) {
        contPlaylist.innerHTML =
            `<div class="eachPlaylist">
                <a href="javascript:;" onclick="addPlaylist"> <i class="fas fa-folder-plus"></i> </a>
                <div>
                    <img src="${onePlaylistTrack.album.cover}" alt="Track">
                    <p> ${onePlaylistTrack.title} </p>
                </div>
                <p> ${onePlaylistTrack.artist.name} </p>
            </div>`
    }

    console.log(allPlaylistTracks)

})

.catch(function(error){
    console.log(error);
})

function addPlaylist (track, trackId, trackCover) {
    let localPlaylist = window.localStorage.getItem(addTrack);
    let jsonPlaylist = JSON.parse(localPlaylist);

    if(!jsonPlaylist) {
        jsonPlaylist = [];
    }

    let trackPlaylist = {track: Track, trackId: TrackID, trackCover: TrackCover};
    jsonPlaylist.push(trackPlaylist);

    window.localStorage.setItem("addPlaylist", JSON.stringify(jsonPlaylist));
}
