import React from "react";
import { StyledListGroup, StyledBigDiv, StyledText } from "./style";

const PocketUser = ({ user, searchTerm }) => {
  return (
    <StyledListGroup>
      {user
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.email.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((singleUser) => (
          <StyledBigDiv>
            <StyledText>{singleUser.name}</StyledText>
            <StyledText>{singleUser.email}</StyledText>
          </StyledBigDiv>
        ))}
    </StyledListGroup>
  );
};

export default PocketUser;
