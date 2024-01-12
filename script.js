const charactersContainer = document.getElementById('characters-container');

fetch("https://rickandmortyapi.com/api/character")
  .then(response => response.json())
  .then(data => {
    data.results.forEach(character => {
      let card = document.createElement('div');
      card.classList.add('card');
      
      let image = document.createElement('img');
      image.src = character.image;
      image.alt = character.name;
      image.classList.add('character-image');
      
      image.addEventListener('click', () => {
        
        alert(`Name: ${character.name}\nStatus: ${character.status}\nSpecies: ${character.species}\nLocation: ${character.location.name}`);
      });

      card.appendChild(image);

      let nameElement = document.createElement('p');
      nameElement.classList.add('character-detail');
      nameElement.innerHTML = `<span class="attribute">Name:</span> ${character.name}`;
      card.appendChild(nameElement);

      let statusElement = document.createElement('p');
      statusElement.classList.add('character-detail');
      statusElement.innerHTML = `<span class="attribute">Status:</span> ${character.status}`;
      card.appendChild(statusElement);

      let speciesElement = document.createElement('p');
      speciesElement.classList.add('character-detail');
      speciesElement.innerHTML = `<span class="attribute">Species:</span> ${character.species}`;
      card.appendChild(speciesElement);

      let locationElement = document.createElement('p');
      locationElement.classList.add('character-detail');
      locationElement.innerHTML = `<span class="attribute">Location:</span> ${character.location.name}`;
      card.appendChild(locationElement);

      charactersContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
