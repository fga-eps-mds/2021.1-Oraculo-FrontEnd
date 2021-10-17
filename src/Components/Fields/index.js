import React from "react";
import PocketFields from "../PocketFields";
import { StyledListGroup } from "./style";

const Fields = ({ process }) => {
  return (
    <StyledListGroup>
      {process.map((post) => (
        <PocketFields
          key={post.id}
          name={post.register_number}
          description={post.requester}
          creator={post.requester}
        ></PocketFields>
      ))}
    </StyledListGroup>
  );
};

export default Fields;
