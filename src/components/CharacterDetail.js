import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterDetail = (props) => {
  const getStatus = () => {
    const statusCharacter = props.character.status;
    if (statusCharacter === "Alive") {
      return "fas fa-heartbeat";
    } else if (statusCharacter === "Dead") {
      return "fas fa-skull-crossbones";
    } else {
      return "fas fa-question";
    }
  };

  return (
    <>
      <div className="wrap-cardDetail">
        <article className="characterCardDetail">
          <Link to="/" className="link_return">
            <i className="fas fa-arrow-left"></i> Return
          </Link>
          <img
            className="characterCardDetail__img"
            src={props.character.image}
            alt={props.character.name}
          />
          <div className="characterCardDetail__detail">
            <h4 className="characterCardDetail__detail-name">
              {props.character.name}
            </h4>
            <ul>
              <li>
                <span>Status: </span>
                <i className={getStatus()}></i>
              </li>
              <li>
                <span>Species: </span> {props.character.species}
              </li>
              <li>
                <span>Origin: </span> {props.character.origin}
              </li>
              <li>
                <span>Episodes: </span> {props.character.episode}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </>
  );
};

export default CharacterDetail;

CharacterDetail.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
    origin: PropTypes.string,
    episode: PropTypes.number,
    species: PropTypes.string,
    image: PropTypes.string,
  }),
};
