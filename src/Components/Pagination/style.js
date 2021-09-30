import styled from "styled-components";
import { colors, fonts, radius } from "../../style";

export const StyledNavigation = styled.nav``;
export const StyledPagination = styled.ul`
  border-radius: 0px 0px 10px 10px;
  list-style-type: none;
  overflow: hidden;
  background-color: ${colors.header};
`;
export const StyledPageItems = styled.li`
  float: left;
`;
export const StyledPageLink = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
`;
