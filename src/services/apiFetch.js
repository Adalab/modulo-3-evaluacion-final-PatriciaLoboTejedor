const apiFetch = () => {
  const urlApi = "https://rickandmortyapi.com/api/character";
  return fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const charactersData = data.results
        /*.sort((name) => name - name)*/
        .map((character) => {
          return {
            id: character.id,
            name: character.name,
            image: character.image,
            status: character.status,
            species: character.species,
            origin: character.origin.name,
            episode: character.episode.length,
          };
        });
      return charactersData;
    });
};

export default apiFetch;
