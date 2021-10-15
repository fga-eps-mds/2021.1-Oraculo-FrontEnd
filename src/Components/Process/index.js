import React from "react";
import PocketDocument from "../PocketDocument";
import { StyledListGroup } from "./style";

const Process = ({ process }) => {
  return (
    <StyledListGroup>
      {process.map((post) => (
        <PocketDocument
          key={post.id}
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
