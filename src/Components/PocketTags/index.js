import React from "react";

import {
  StyledBigDiv,
  StyledText,
  StyledListGroup,
  CircleColor,
  StyledCircleDiv,
} from "./styles";

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
            <StyledCircleDiv>
              <CircleColor
                style={{ cursor: "pointer", backgroundColor: singleTags.color }}
              />
            </StyledCircleDiv>
          </StyledBigDiv>
        ))}
    </StyledListGroup>
  );
};

export default PocketTags;
