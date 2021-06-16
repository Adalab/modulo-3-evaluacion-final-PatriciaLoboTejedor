const apiFetch = () => {
  const urlApi = "https://rickandmortyapi.com/api/character";
  return fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
      const orderAllCharactersByName = data.results.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      const charactersData = orderAllCharactersByName.map((character) => {
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
