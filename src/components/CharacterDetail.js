const CharacterDetail = (props) => {
  return (
    <div>
      <header>
        <h2>{props.character.name}</h2>
      </header>
      <section>
        <img
          className="card__img"
          src={props.character.image}
          alt={props.character.name}
        />
        <h4>{props.character.name}</h4>
        <ul>
          <li>Género: {props.character.gender}</li>
          <li>Email: {props.character.email}</li>
          <li>Nick: {props.character.username}</li>
          <li>Ciudad: {props.character.city}</li>
          <li>País: {props.character.country}</li>
        </ul>
      </section>
    </div>
  );
};

export default CharacterDetail;
