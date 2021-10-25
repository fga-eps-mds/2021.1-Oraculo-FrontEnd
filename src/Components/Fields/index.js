import React, { useState } from "react";
import PocketFields from "../PocketFields";
import { StyledListGroup } from "./style";

const Fields = ({ process }) => {
  const [creator, setCreator] = useState("Padrão");

  return (
    <StyledListGroup>
      {process.map((post) => (
        <PocketFields
          key={post.id}
          name={post.name}
          description={post.description}
          creator={creator}
        ></PocketFields>
      ))}
    </StyledListGroup>
  );
};

export default Fields;
