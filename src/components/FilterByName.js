import PropTypes from "prop-types";

const FilterByName = (props) => {
  // Evento que maneja el value del input en referencia a su key
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "name",
    });
  };

  return (
    <>
      <label htmlFor="name"></label>
      <input
        className="main__sectionForm-form_input"
        type="text"
        name="name"
        id="name"
        placeholder="Filter by name"
        value={props.filterName}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByName;

FilterByName.propTypes = {
  handleChange: PropTypes.func,
  filterName: PropTypes.string,
};
