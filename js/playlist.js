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