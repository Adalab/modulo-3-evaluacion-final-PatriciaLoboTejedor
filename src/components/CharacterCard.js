import { Link } from "react-router-dom";

const CharacterCard = (props) => {
  const getSpecies = () => {
    const speciesCharacter = props.character.species;
    if (speciesCharacter === "Alien") {
      return "fas fa-hand-spock";
    } else {
      return "fas fa-user-alt";
    }
  };
  return (
    <Link to={`/character/${props.character.id}`}>
      <article>
        <img src={props.character.image} alt={props.character.name} />
        <h2>{props.character.name}</h2>
        <p>
          <i className={getSpecies()}>{props.character.species}</i>
        </p>
      </article>
    </Link>
  );
};

export default CharacterCard;
