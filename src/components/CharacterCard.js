import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
      <article className="characterCard">
        <img
          src={props.character.image}
          alt={props.character.name}
          className="characterCard__img"
        />
        <div className="characterCard__text">
          <h2 className="characterCard__text-name">{props.character.name}</h2>
          <p className="characterCard__text-species">
            <i
              className={`${getSpecies()} characterCard__text-species-icon`}></i>
            {props.character.species}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default CharacterCard;

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string,
    image: PropTypes.string,
  }),
};
