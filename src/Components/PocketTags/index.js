import React from "react";

import { StyledBigDiv, StyledText, StyledListGroup } from "./styles";

const PocketTags = ({ tags, searchTerm }) => {
  return (
    <StyledListGroup>
      {tags
        .filter((val) => {
          if (
            searchTerm === "" ||
            val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.color.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((singleTags) => (
          <StyledBigDiv>
            <StyledText>{singleTags.name}</StyledText>
            <StyledText>{singleTags.color}</StyledText>
          </StyledBigDiv>
        ))}
    </StyledListGroup>
  );
};

export default PocketTags;
