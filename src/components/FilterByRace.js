import PropTypes from "prop-types";

const FilterBySpecies = (props) => {
  // Evento que maneja el value del input en referencia a su key
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "race",
    });
  };
  return (
    <>
      <label htmlFor="species"></label>
      <select
        className="main__sectionForm-form_select"
        name="species"
        id="species"
        value={props.filterSpecies}
        placeholder="Filter by races"
        onChange={handleChange}>
        <option value="">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
};

export default FilterBySpecies;

FilterBySpecies.propTypes = {
  handleChange: PropTypes.func,
  filterRace: PropTypes.string,
};
