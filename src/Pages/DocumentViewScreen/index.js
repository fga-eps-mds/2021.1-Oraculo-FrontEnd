import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import MainButton from "../../Components/MainButton";
import PocketDocument from "../../Components/PocketDocument";
import FilterButton from "../../Components/FilterButton";
import {
  StyledTitle,
  StyledBody,
  StyledOrganizeButtons,
  StyledBigButton,
  StyledSmallButton,
} from "./styles";

import Posts from "../../Components/Posts/index";
import Pagination from "../../Components/Pagination/index";
import axios from "axios";

const DocumentViewScreen = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header />

      <StyledBody>
        <StyledTitle>Processos</StyledTitle>
        <div>
          <FilterButton />
          <MainButton title={"Novo Documento"} />
        </div>
        <StyledOrganizeButtons>
          <StyledBigButton>Emissor</StyledBigButton>
          <StyledBigButton>N do SEI</StyledBigButton>
          <StyledBigButton>Divisão</StyledBigButton>
          <StyledBigButton>Data</StyledBigButton>
          <StyledBigButton>Tag</StyledBigButton>
          <StyledSmallButton>...</StyledSmallButton>
        </StyledOrganizeButtons>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </StyledBody>
    </>
  );
};

export default DocumentViewScreen;
