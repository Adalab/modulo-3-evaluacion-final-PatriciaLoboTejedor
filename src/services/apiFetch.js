const apiFetch = () => {
  const urlApi = "https://rickandmortyapi.com/api/character";
  return fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results.name);
      const charactersData = data.results
        /*.sort((name) => name - name)*/
        .map((character) => {
          return {
            id: character.id,
            name: character.name,
            image: character.image,
            species: character.species,
            planet: character.location.name,
            status: character.status,
            episode: character.episode.length,
          };
        });
      return charactersData;
    });
};

export default apiFetch;
