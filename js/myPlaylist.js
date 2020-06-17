/*

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist")
.then(function(res){
    return res.json();
})

.then(function(data){

    let allOfMyPlaylist = JSON.parse(window.localStorage.getItem("addPlaylist"));
    let contMyPlaylist = document.querySelector(".myPlaylist");

    for (const oneOfMyPlaylist of allOfMyPlaylist) {
        contMyPlaylist.innerHTML +=
            `<div class="eachPlaylist">
                <a href="javascript:;" class="button"> <i class="fas fa-folder-plus"></i> </a>
                <a href="detail.html?=${oneOfMyPlaylist.album.id}">
                    <div>
                        <img src="${oneOfMyPlaylist.album.cover}" alt="Track">
                        <p> ${oneOfMyPlaylist.title} </p>
                    </div>
                </a>
                <a href="detail.html?=${oneOfMyPlaylist.artist.id}">
                    <p> ${oneOfMyPlaylist.artist.name} </p>
                </a>
            </div>`

})

.catch(function(error){
    console.log(error);
})

*/