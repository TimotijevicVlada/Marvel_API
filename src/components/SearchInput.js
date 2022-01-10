import React from "react";

const SearchInput = ({ setSearchedCaracter }) => {
  return (
    <div className="search">
      <div className="image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1200px-Marvel_Logo.svg.png"
          alt="marvel_img"
        />
      </div>
      <div className="input_search">
        <input
          onChange={(e) => setSearchedCaracter(e.target.value)}
          type="text"
          placeholder="Search your caracter"
        />
      </div>
    </div>
  );
};

export default SearchInput;
