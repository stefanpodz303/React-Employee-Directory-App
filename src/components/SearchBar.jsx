import React from "react";

const SearchBar = (props) => {

  return (
    <nav >
      <form  onSubmit={props.handleFormSubmit}>
        <input
          className="form-control"
          value={props.value}
          name="search"
          onChange={props.handleInputChange}
          type="search"
          placeholder="Search"
        />
      </form>
    </nav>
  );
};

export default SearchBar;