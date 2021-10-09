const apiFetch = () => {
  const urlApi = "https://superheroapi.com/api/3076628172556063/";
  return fetch(urlApi)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const orderAllCharactersByName = data.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      const charactersData = orderAllCharactersByName.map((results) => {
        return {
          id: results.id,
          name: results.name,
          image: results.image.url,
          intelligence: results.powerstats.intelligence,
          strength: results.powerstats.strength,
          speed: results.powerstats.speed,
          durability: results.powerstats.durability,
          power: results.powerstats.power,
          combat: results.powerstats.combat,
          gender: results.appearance.gender,
          race: results.appearance.race,
          alignment: results.alignment,
        };
      });
      return charactersData;
    });
};

export default apiFetch;
