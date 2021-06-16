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
            <li>Species: {props.character.species}</li>
            <li>Origin: {props.character.origin}</li>
            <li>Episodes: {props.character.episode}</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default CharacterDetail;
