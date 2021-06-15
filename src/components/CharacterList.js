import CharacterCard from "./CharacterCard";

const CharacterList = (props) => {
  const characterElements = props.characters.map((character) => {
    return (
      <li key={character.id}>
        <CharacterCard character={character} />
      </li>
    );
  });

  return (
    <section>
      <ul>{characterElements}</ul>
    </section>
  );
};

export default CharacterList;
