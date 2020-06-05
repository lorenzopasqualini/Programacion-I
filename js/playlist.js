fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
.then(function(res){
    return res.json();
})

.then(function(data){
console.log(data)

    let allPlaylists = data.playlists.data;
    let contPlaylists = document.querySelector(".cont-playlist")
    for (const onePlaylist of allPlaylists) {
        contPlaylists.innerHTML +=
            `<div class="grid-item">
                <img src="${onePlaylist.picture_big}" alt="Deezer Playlist">
            </div>`
    }

})

.catch(function(error){
    console.log(error);
})
