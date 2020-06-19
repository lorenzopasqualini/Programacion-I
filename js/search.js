let queryResult = window.location.search;
let objetoResult = new URLSearchParams(queryResult);
let querySearch = objetoResult.get("search");

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=" + querySearch)
    .then(function(res){
        return res.json();
    })

    .then(function(data){
    console.log(data);

    let allResults = data.data;
    let results = document.querySelector(".search");
    for (const eachResult of allResults) {
        results.innerHTML +=
            `<div class="results">

                <a href="detail.html?trackid=${eachResult.id}">
                    <img src="${eachResult.album.cover_medium}">
                    <p> ${eachResult.title_short} </p>
                </a>

                <a href="detail.html?artistid=${eachResult.artist.id}">
                    <img src="${eachResult.artist.picture_small}" id="artist-img">
                    <p> ${eachResult.artist.name} </p>
                </a>

            </div>`
    }
    
    })

    .then(function(error){
        console.log(error);
        return null;
    })