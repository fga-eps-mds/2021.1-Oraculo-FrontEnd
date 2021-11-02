import React from "react";
import PocketFieldsDepartment from "../PocketFieldsDepartment";
import { StyledListGroup } from "./style";

const FieldsDepartment = ({ process }) => {
  return (
    <StyledListGroup>
      {process.map((post) => (
        <PocketFieldsDepartment
          key={post.register_number}
          city={post.city}
          state={post.state}
          requester={post.requester}
          inclusion_date={post.inclusion_date}
          sei_number={post.sei_number}
          tags={post.tags}
        ></PocketFieldsDepartment>
      ))}
    </StyledListGroup>
  );
};

export default FieldsDepartment;
