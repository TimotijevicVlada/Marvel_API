import React from "react";

const SearchInput = ({ setSearchedCaracter }) => {
  return (
    <div>
      <input onChange={(e) => setSearchedCaracter(e.target.value)} type="text" placeholder="Search your caracter" />
    </div>
  );
};

export default SearchInput;
