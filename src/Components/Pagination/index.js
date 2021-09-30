import React from "react";
import {
  StyledNavigation,
  StyledPagination,
  StyledPageItems,
  StyledPageLink,
} from "./style";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledNavigation>
      <StyledPagination>
        {pageNumbers.map((number) => (
          <StyledPageItems key={number}>
            <StyledPageLink onClick={() => paginate(number)} href="!#">
              {number}
            </StyledPageLink>
          </StyledPageItems>
        ))}
      </StyledPagination>
    </StyledNavigation>
  );
};

export default Pagination;
