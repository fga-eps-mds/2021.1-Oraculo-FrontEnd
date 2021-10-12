import React from "react";
import {
  StyledNavigation,
  StyledPagination,
  StyledPageItems,
  StyledPageLink,
} from "./style";

const Pagination = ({ processPerPage, totalProcess, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProcess / processPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledNavigation>
      <StyledPagination>
        {pageNumbers.map((number) => (
          <StyledPageItems>
            <StyledPageLink onClick={() => paginate(number)}>
              {number}
            </StyledPageLink>
          </StyledPageItems>
        ))}
      </StyledPagination>
    </StyledNavigation>
  );
};

export default Pagination;
