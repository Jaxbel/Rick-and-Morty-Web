// Función para buscar la location y mostrar los primeros 5 residents
function buscarValoresPorID() {
    
    const locationId = parseInt(document.getElementById('input').value); 
    const resultElement = document.getElementById('result');
    const residentsElement = document.getElementById('residents');


    const locationURL = `https://rickandmortyapi.com/api/location/${locationId}`;
    
  
    fetch(locationURL)
        .then(response => response.json())
        .then(data => {
            if (data.error) {2
                resultElement.textContent = 'Localización no encontrada';
            } else {
                
                resultElement.textContent = `Nombre de la localización: ${data.name}`;

                // Obtener los primeros 5 residents
                const firstFiveResidents = data.residents.slice(0, 5);
                

                // Imprimir los primeros 5 residents
                
                firstFiveResidents.forEach(residentURL => {
                    fetch(residentURL)
                        .then(response => response.json())
                        .then(residentData => {
                            console.log(residentData.origin)
                            residentsElement.innerHTML += `

                            <article>
                                <div class="card">
                                    <img src="${residentData.image}" class="card-img-top" >
                                    <div class="card-body">
                                        <h5 class="name">Name: ${residentData.name}</h5>
                                        <p class="status">Status: ${residentData.status}</p>
                                        <p class="species">Species: ${residentData.species}</p>
                                        <p class="origin">Origin: ${residentData.origin.name}</p>
                                        <p>Episodes</p>
                                        <ul>
                                            <a class="link-epi" href="${residentData.episode}">${residentData.episode.slice(0, 3).join(', ')}</a>
                                        </ul>
                                    </div>
                                </div>  
                            </article>
                            
                            `;
                            
                        })
                        .catch(error => {
                            console.error('Error al obtener datos del resident:', error);
                        });
                        residentsElement.innerHTML = '';
                });
                
            }
        })
        .catch(error => {
            console.error('Error al consultar la API:', error);
            resultElement.textContent = 'Error al consultar la API';
        });
        
}

document.getElementById('search-btn').addEventListener('click', buscarValoresPorID);

