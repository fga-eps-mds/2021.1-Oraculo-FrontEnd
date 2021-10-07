import React from "react";
import PocketDocument from "../PocketDocument";
import { StyledListGroup } from "./style";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Carregando...</h2>;
  }

  return (
    <StyledListGroup>
      {posts.map((post) => (
        <PocketDocument
          name={post.requester}
          seiNumber={post.sei_number}
          department={post.description}
          documentDate={post.document_date}
        ></PocketDocument>
      ))}
    </StyledListGroup>
  );
};

export default Posts;
