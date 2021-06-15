import "../stylesheets/App.scss";
import logo from "../images/Rick_and_Morty_logo.png";
import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList";
import FilterByName from "./FilterByName";
import apiFetch from "../services/apiFetch";
import ls from "../services/localStorage";

const App = () => {
  const [characters, setCharacters] = useState(ls.get("characters") || []);

  const [filterText, setFilterText] = useState(ls.get("filterText") || "");
  //ls.get('filterText', '') "Maricarmen"
  /*const [filterGender, setFilterGender] = useState(ls.get("filterGender", ""));*/

  useEffect(() => {
    if (characters.length === 0) {
      apiFetch().then((charactersData) => {
        setCharacters(charactersData);
      });
    }
  }, []);

  useEffect(() => {
    ls.set("characters", characters);
  }, [characters]);

  const filteredCharacters = characters;

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Ricky and Morty" />
      </header>
      <main>
        <FilterByName />
        <CharacterList characters={filteredCharacters} />
      </main>
    </div>
  );
};

export default App;
