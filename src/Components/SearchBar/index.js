import React from "react";
import { StyledSearchBar } from "./styles";
import { GrFormSearch } from "react-icons/gr";

const SearchBar = (setSearchTerm) => (
  <>
    <StyledSearchBar>
      <button>
        <GrFormSearch size="3rem" />
      </button>
      <input
        id="searchText"
        type="text"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </StyledSearchBar>
  </>
);

export default SearchBar;
