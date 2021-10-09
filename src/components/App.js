import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

// Imagen importada
import logo from "../images/super-heroes.png";
// Componentes importados
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
import Error from "./Error";
// Servicios importados
import apiFetch from "../services/apiFetch";
import ls from "../services/localStorage";

const App = () => {
  // Estado inicial del array principal, o se llena con el local o nos devuelve un array vacío
  const [characters, setCharacters] = useState(ls.get("characters") || []);
  // Estado inicial del input text, o se llena con el local o nos devuelve un string vacío
  const [filterName, setFilterName] = useState(ls.get("filterName") || "");
  const [filterRace, setFilterRace] = useState(ls.get("filterRace") || "");

  // Si el array characters esta vacío entonces llamo a la función del fetch
  useEffect(() => {
    if (characters.length === 0) {
      apiFetch().then((charactersData) => {
        setCharacters(charactersData);
      });
    }
  }, [characters]);

  // Guarda los cambios de estado en localStorage
  useEffect(() => {
    ls.set("characters", characters);
    ls.set("filterName", filterName);
    ls.set("filterRace", filterRace);
  }, [characters, filterName, filterRace]);

  // Evento manejador del value de los inputs para filtrar
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);
    } else if (data.key === "race") {
      setFilterRace(data.value);
    }
  };

  // Guarda los personajes filtrados para pasarlos por props al listado y asi repintar
  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      if (filterRace === "") {
        return true;
      } else {
        return character.race === filterRace;
      }
    });

  // Asigna una ruta única según el id del personaje para que se abra el componente detalle del personaje
  const renderCharacterDetail = (propsId) => {
    const routeCharacterId = parseInt(propsId.match.params.characterId);
    const foundCharacter = characters.find(
      (character) => character.id === routeCharacterId
    );
    if (foundCharacter) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <Error errorCode={400} />;
    }
  };

  // Reset
  const handleReset = () => {
    setFilterName("");
    setFilterRace("");
  };

  return (
    <div className="body">
      <header className="header">
        <img src={logo} alt="SuperHero" className="header__logo" />
      </header>
      <main className="main">
        <Switch>
          <Route exact path="/">
            <Filters
              reset={handleReset}
              filterName={filterName}
              filterRace={filterRace}
              handleFilter={handleFilter}
            />
            <CharacterList
              filterName={filterName}
              characters={filteredCharacters}
            />
          </Route>
          <Route
            path="/character/:characterId"
            render={renderCharacterDetail}
          />
          <Route>
            <Error errorCode={404} />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
