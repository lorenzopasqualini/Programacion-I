window.addEventListener("load", function(){

    let allOfMyPlaylist = JSON.parse(window.localStorage.getItem("addPlaylist"));
    let contMyPlaylist = document.querySelector(".myPlaylist");

    for (const oneOfMyPlaylist of allOfMyPlaylist) {

        console.log(oneOfMyPlaylist);
        contMyPlaylist.innerHTML +=
            `<div class="myPlaylistTrack">

                <a href="detail.html?albumid=${oneOfMyPlaylist.id}">
                    <img src="${oneOfMyPlaylist.cover}" alt="Track Image">
                </a>

                <a href="detail.html?albumid=${oneOfMyPlaylist.id}">
                    <p> ${oneOfMyPlaylist.title} </p>
                </a>

                <a href="detail.html?artistid=${oneOfMyPlaylist.artist.id}">
                    <div>
                        <img src="${oneOfMyPlaylist.artist.picture_small}" id="myPlaylist-img" alt="Artist Image">
                        <p> ${oneOfMyPlaylist.artist.name} </p>
                    </div>
                </a>

            </div>`
    }
})