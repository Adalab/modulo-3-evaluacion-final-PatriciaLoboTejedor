import React from "react";

const FilterByName = (props) => {
  return (
    <form>
      <label className="" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input className="" type="text" name="name" id="name" />
    </form>
  );
};

export default FilterByName;
