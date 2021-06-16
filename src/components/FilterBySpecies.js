const FilterBySpecies = (props) => {
  // Evento que maneja el value del input en referencia a su key
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "species",
    });
  };
  return (
    <>
      <label className="" htmlFor="species">
        Filter by species:
      </label>

      <select
        className=""
        name="species"
        id="species"
        value={props.filterSpecies}
        onChange={handleChange}>
        <option value="">All</option>
        <option value="Human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </>
  );
};

export default FilterBySpecies;
