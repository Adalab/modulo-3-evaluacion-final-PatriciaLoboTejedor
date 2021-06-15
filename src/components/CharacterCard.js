const CharacterCard = (props) => {
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
    <article>
      <img src={props.character.image} alt={props.character.name} />
      <h2>{props.character.name}</h2>
      <p>{props.character.species}</p>
      <p>
        Status:<i className={getStatus()}></i>
      </p>
    </article>
  );
};

export default CharacterCard;
