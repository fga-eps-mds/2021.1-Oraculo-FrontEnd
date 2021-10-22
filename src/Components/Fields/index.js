import React from "react";
import PocketFields from "../PocketFields";
import { StyledListGroup } from "./style";

const Fields = ({ process }) => {
  return (
    <StyledListGroup>
      {process.map((post) => (
        <PocketFields
          key={post.id}
          name={post.name}
          description={post.description}
          creator={post.created_by}
        ></PocketFields>
      ))}
    </StyledListGroup>
  );
};

export default Fields;
