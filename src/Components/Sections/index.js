import React from "react";
import PocketSection from "../PocketSection";
import { StyledListGroup } from "./style";

const Sections = ({ sections, searchTerm }) => {
  return (
    <StyledListGroup>
      {/* Filter all sections */}
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
          // Component to repeat
          <PocketSection key={post.id} name={post.name} />
        ))}
    </StyledListGroup>
  );
};

export default Sections;
