import React from "react";
import { StyledListGroup, StyledBigDiv, StyledText } from "./style";

const PocketUser = ({ user }) => {
  return (
    <StyledListGroup>
      {user.map((singleUser) => (
        <StyledBigDiv>
          <StyledText>{singleUser.name}</StyledText>
          <StyledText>{singleUser.email}</StyledText>
        </StyledBigDiv>
      ))}
    </StyledListGroup>
  );
};

export default PocketUser;
