import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
// Estilos importados
import "../stylesheets/App.scss";
import logo from "../images/Rick_and_Morty_logo.png";
// Componentes importados
import CharacterList from "./CharacterList";
import FilterByName from "./FilterByName";
import CharacterDetail from "./CharacterDetail";
// Servicios importados
import apiFetch from "../services/apiFetch";
import ls from "../services/localStorage";

const App = () => {
  // Estado inicial del array principal, o se llena con el local o nos devuelve un array vacío
  const [characters, setCharacters] = useState(ls.get("characters") || []);
  // Estado inicial del input text, o se llena con el local o nos devuelve un string vacío
  const [filterName, setFilterName] = useState(ls.get("filterName") || "");

  // Si el array characters esta vacío entonces llamo a la función del fetch
  useEffect(() => {
    if (characters.length === 0) {
      apiFetch().then((charactersData) => {
        setCharacters(charactersData);
      });
    }
  }, []);

  // Guarda los cambios de estado en localStorage
  useEffect(() => {
    ls.set("characters", characters);
    ls.set("filterName", filterName);
  }, [characters, filterName]);

  // Evento manejador del value del input para filtrar por nombre
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    }
  };

  // Guarda los personajes filtrados para pasarlos por props a re-pintar
  const filteredCharacters = characters.filter((user) => {
    return user.name.toLowerCase().includes(filterName.toLowerCase());
  });
  // Asigna una ruta única según el id del personaje para que se habra el componente detalle de él
  const renderCharacterDetail = (props) => {
    const routeCharacterId = parseInt(props.match.params.characterId);
    const foundCharacter = characters.find((character) => {
      return character.id === routeCharacterId;
    });
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <p>Personaje no encontrado</p>;
    }
  };

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Ricky and Morty" />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <FilterByName filterName={filterName} handleFilter={handleFilter} />
            <CharacterList characters={filteredCharacters} />
          </Route>
          <Route
            path="/character/:characterId"
            render={renderCharacterDetail}
          />
        </Switch>
      </main>
    </div>
  );
};

export default App;
