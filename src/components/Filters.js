import FilterByName from "./FilterByName";
import FilterByRace from "./FilterByRace";
import PropTypes from "prop-types";

const Filters = (props) => {
  // Evento que quita el envio por defecto al hacer enter en input
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section className="main__sectionForm">
      <form onSubmit={handleSubmit} className="main__sectionForm-form">
        <FilterByName
          filterName={props.filterName}
          handleFilter={props.handleFilter}
        />
        <FilterByRace
          filterRace={props.filterRace}
          handleFilter={props.handleFilter}
        />
        <button className="main__sectionForm-form_reset" onClick={props.reset}>
          <i className="far fa-trash-alt"></i> Reset
        </button>
      </form>
    </section>
  );
};

export default Filters;

Filters.propTypes = {
  reset: PropTypes.func,
  handleFilter: PropTypes.func,
  handleSubmit: PropTypes.func,
  filterName: PropTypes.string,
  filterSpecies: PropTypes.string,
};
