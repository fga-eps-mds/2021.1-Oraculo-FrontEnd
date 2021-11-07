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

  return (
    <StyledListGroup>
      {process
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.state.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            console.log(val, "teste");
            return val;
          }
        })
        .map((post) => (
          <PocketDocument
            key={post.id}
            registerNumber={
              post.register_number === "" ? "-" : post.register_number
            }
            requester={post.requester === "" ? "-" : post.requester}
            inclusionDate={post.document_date === "" ? "-" : post.document_date}
            city={post.city === "" ? "-" : post.city}
            state={post.state === "" ? "-" : post.state}
            seiNumber={
              post.sei_number === "" ? "-" : seiNumberLimit(post.sei_number)
            }
            registerId={post.id}
          ></PocketDocument>
        ))}
    </StyledListGroup>
  );
};

export default Process;
