import React, { useState } from "react";
import PocketFields from "../PocketFields";
import { StyledListGroup } from "./style";

const Fields = ({ process, searchTerm }) => {
  const [creator] = useState("Padrão");

  return (
    <StyledListGroup>
      {/* ADicionando lógica que filtra campos */}
      {process
        .filter((val) => {
          if (
            searchTerm === "" ||
            val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.description.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((post) => (
          // Campo individual de campos
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
