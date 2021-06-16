import { Link } from "react-router-dom";

const Error = (props) => {
  const renderError = () => {
    if (props.errorCode === 200) {
      return (
        <article className="error200">
          There is no character that matches the search for the word:
          <span> {props.filterName}</span>
        </article>
      );
    } else if (props.errorCode === 400) {
      return (
        <article className="error400">
          <h2>This character doesn't exist.</h2>
          <Link to="/">
            <button className="error400_button">Back to character list</button>
          </Link>
        </article>
      );
    } else if (props.errorCode === 404) {
      return (
        <article className="error400">
          <h2>Page not found</h2>
          <Link to="/">
            <button className="error400_button">Back to character list</button>
          </Link>
        </article>
      );
    }
  };

  return <section>{renderError()}</section>;
};

export default Error;
