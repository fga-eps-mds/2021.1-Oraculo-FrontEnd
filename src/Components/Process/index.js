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
          requester={post.requester}
          seiNumber={post.sei_number}
          department={post.description}
          documentDate={post.document_date}
        ></PocketDocument>
      ))}
    </StyledListGroup>
  );
};

export default Process;
