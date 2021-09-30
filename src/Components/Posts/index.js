import React from "react";
import PocketDocument from "../PocketDocument";
import { StyledListGroup, StyledListGroupItem } from "./style";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <StyledListGroup>
      {posts.map((post) => (
        <PocketDocument
          key={post.id}
          name={post.id}
          seiNumber={post.id}
          department={post.id}
          documentDate={post.id}
        ></PocketDocument>
      ))}
    </StyledListGroup>
  );
};

export default Posts;
