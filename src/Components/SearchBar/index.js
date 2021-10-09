import React from "react";
import { StyledSearchBar } from "./styles";
import { GrFormSearch } from "react-icons/gr";

const SearchBar = () => (
  <>
    <StyledSearchBar>
      <button>
        <GrFormSearch size="3rem" />
      </button>
      <input id="searchText" type="text"></input>
    </StyledSearchBar>
  </>
);

export default SearchBar;
