import React from "react";
import PocketDocument from "../PocketDocument";
import { StyledListGroup } from "./style";

const Process = ({ process, loading }) => {
  if (loading) {
    return <h2>Carregando...</h2>;
  }

  return (
    <StyledListGroup>
      {process.map((post) => (
        <PocketDocument
          registerNumber={post.register_number}
          requester={post.requester}
          inclusionDate={post.document_date}
          city={post.city}
          state={post.state}
          seiNumber={post.sei_number}
        ></PocketDocument>
      ))}
    </StyledListGroup>
  );
};

export default Process;
