import { Link } from "react-router-dom";

const Error = (props) => {
  const renderError = () => {
    if (props.errorCode === 200) {
      return (
        <article className="">
          No hay ningún personaje que coincida con la palabra:
          <span className=""> {props.filterName}</span>
        </article>
      );
    } else if (props.errorCode === 400) {
      return (
        <article className="">
          <h2 className="">This character doesn't exist.</h2>
          <Link to="/">
            <button className="">Back to character list</button>
          </Link>
        </article>
      );
    } else {
      return <p className="">Page not found</p>;
    }
  };

  return <div className="">{renderError()}</div>;
};

export default Error;
