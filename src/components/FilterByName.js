import React from "react";

const FilterByName = (props) => {
  return (
    <>
      <label className="" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input className="" type="text" name="name" id="name" />
    </>
  );
};

export default FilterByName;
