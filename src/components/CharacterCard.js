import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterCard = (props) => {
  const getSpecies = () => {
    const raceCharacter = props.character.race;
    if (raceCharacter === "Alien") {
      return "fas fa-hand-spock";
    } else if (raceCharacter === "Human") {
      return "fas fa-user-alt";
    } else {
      return "fas fa-times";
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
            <span className="characterCard__text-species-text">
              {props.character.race}
            </span>
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
