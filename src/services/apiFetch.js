const apiFetch = () => {
  const urlApi = "https://akabab.github.io/superhero-api/api/all.json";
  return fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
      const orderAllCharactersByName = data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      console.log(data);
      const charactersData = orderAllCharactersByName.map((character) => {
        return {
          id: character.id,
          name: character.name,
          image: character.images.sm,
          intelligence: character.powerstats.intelligence,
          strength: character.powerstats.strength,
          speed: character.powerstats.speed,
          durability: character.powerstats.durability,
          power: character.powerstats.intelligence,
          combat: character.powerstats.intelligence,
          gender: character.appearance.gender,
          race: character.appearance.race,
        };
      });
      return charactersData;
    });
};

export default apiFetch;
