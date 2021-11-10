import React from "react";
import PocketDocument from "../PocketDocument";
import { StyledListGroup } from "./style";

const Process = ({ process, searchTerm }) => {
  const seiNumberLimit = (seiNumber) => {
    if (seiNumber.length < 10) {
      return seiNumber;
    } else {
      return `${seiNumber.substring(0, 10)}...`;
    }
  };

  return process.length > 0 ? (
    <StyledListGroup>
      {process
        .filter((val) => {
          if (
            searchTerm === "" ||
            val.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.document_date.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.requester.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.sei_number.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.register_number.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((post) => (
          <PocketDocument
            key={post.id}
            registerNumber={post.register_number === "" ? "-" : post.register_number}
            requester={post.requester === "" ? "-" : post.requester}
            inclusionDate={post.document_date === "" ? "-" : post.document_date}
            city={post.city === "" ? "-" : post.city}
            state={post.state === "" ? "-" : post.state}
            seiNumber={post.sei_number === "" ? "-" : seiNumberLimit(post.sei_number)}
            registerId={post.id}
          ></PocketDocument>
        ))}
    </StyledListGroup>
  ) : (
    <h1 class="zero-registros">Não há registros cadastrados no sistema</h1>
  );
};

export default Process;
