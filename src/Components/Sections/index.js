import React from "react";
import PocketSection from "../PocketSection";
import { StyledListGroup } from "./style";

const Sections = ({ sections, searchTerm }) => {
  return (
    <StyledListGroup>
      {sections
        .filter((val) => {
          if (val === "") {
            return val;
          } else if (
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((post) => (
          <PocketSection key={post.id} name={post.name} />
        ))}
    </StyledListGroup>
  );
};

export default Sections;
