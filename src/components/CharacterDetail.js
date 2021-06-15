import { Link } from "react-router-dom";

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
  const getSpecies = () => {
    const speciesCharacter = props.character.species;
    if (speciesCharacter === "Alien") {
      return "fas fa-hand-spock";
    } else {
      return "fas fa-user-alt";
    }
  };
  return (
    <>
      <main>
        <Link to="/">Volver</Link>
        <section>
          <img
            className=""
            src={props.character.image}
            alt={props.character.name}
          />
          <h4>{props.character.name}</h4>
          <ul>
            <li>
              Status: <i className={getStatus()}></i>
            </li>
            <li>
              Species:
              <i className={getSpecies()}> {props.character.species}</i>
            </li>
            <li>Origin: {props.character.planet}</li>
            <li>Episodes: {props.character.episode}</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default CharacterDetail;
