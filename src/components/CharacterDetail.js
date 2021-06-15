import logo from "../images/Rick_and_Morty_logo.png";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  const getStatus = () => {
    if (props.character.status === "Alive") {
      return "Alive Icon";
    } else if (props.character.status === "unknown") {
      return "unknown Icon";
    } else if (props.character.status === "dead") {
      return "dead Icon";
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
              Status: {props.character.species}
              <i className={getStatus()}></i>
            </li>
            <li>Species: {props.character.species}</li>
            <li>Origin: {props.character.planet}</li>
            <li>Episodes: {props.character.episodes}</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default CharacterDetail;
