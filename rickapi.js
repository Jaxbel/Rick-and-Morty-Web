
function getCharacters(character){

    const results = fetch("https://rickandmortyapi.com/api/character");
    results
        .then(response => response.json())
        .then(data => {
            character(data)
        });

}
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




function getLocation(location){

    const results = fetch("https://rickandmortyapi.com/api/location");
    results
        .then(response => response.json())
        .then(data => {
            location(data)
        });

}



axios.get(`https://rickandmortyapi.com/api/location/${planetNumber}`)
.then(response => {
    const data = response.data;

    if (data.error) {
        alert("Planeta no encontrado");
    } else {
        // Obtener la lista de residentes del planeta
        const residents = data.residents;

        // Mostrar los primeros 5 personajes
        const resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = "<h2>Primeros 5 Personajes:</h2>";
        for (let i = 0; i < Math.min(5, residents.length); i++) {
            resultsContainer.innerHTML += `<p>${residents[i]}</p>`;
        }
    }
})
.catch(error => {
    console.error("Error al realizar la solicitud a la API:", error);
});
