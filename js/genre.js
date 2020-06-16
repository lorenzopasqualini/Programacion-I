let queryGenre = window.location.search;
let objetoGenre = new URLSearchParams(queryGenre);
let genreId = objetoGenre.get("id")

fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/" + genreId)
.then(function(res){
    return res.json();
})

.then(function(data){
console.log(data)

    let indexGenre = document.querySelector("#genres");
    indexGenre.innerHTML +=
        `<div>
            <a href="detail.html?generoid=116"> <div class="genre-item" id="genre-rap"> Rap/Hip Hop </div> </a>
            <a href="detail.html?generoid=165"> <div class="genre-item" id="genre-rnb"> R&B </div> </a>
            <a href="detail.html?generoid=132"> <div class="genre-item" id="genre-pop"> Pop </div> </a>
            <a href="detail.html?generoid=152"> <div class="genre-item" id="genre-rock"> Rock </div> </a>
            <a href="detail.html?generoid=85"> <div class="genre-item" id="genre-indie"> Indie/Alternative </div> </a>
        </div>`

})

.catch(function(error){
    console.log(error);
})
