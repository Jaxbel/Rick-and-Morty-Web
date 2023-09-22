

function getCharacters(character){

    const results = fetch("https://rickandmortyapi.com/api/character");
    results
        .then(response => response.json())
        .then(data => {
            character(data)
        });

}

const searchButton = document.getElementById("search-btn");

searchButton.addEventListener('click', () => {
  
    getCharacters(data => {
        data.results.forEach(personaje => {
            const article = document.createRange().createContextualFragment(`
                <article>
                    <div class="card" style="width: 18rem;">
                        <img src="${personaje.image}" class="card-img-top" alt="personaje">
                        <div class="card-body">
                            <h5 class="name">${personaje.name}</h5>
                            <p class="status">${personaje.status}</p>
                            <p class="species">${personaje.species}</p>
                            <p class="origin">${personaje.origin.name}</p>
                            <p>Episodes</p>
                            <ul><a class="link-epi">${personaje.episode.slice(0, 3).join(', ')}</a></ul>
                        </div>
                    </div>  
                </article>
            `);
    
            const main = document.querySelector("main");
            main.appendChild(article);
        });
    });
 
});

function getLocation(location){
    axios.get(`https://rickandmortyapi.com/api/location/${planetNumber}`)
    .then(response => {
    const data = response.data});
}
