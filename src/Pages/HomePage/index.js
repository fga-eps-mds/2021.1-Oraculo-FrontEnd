import React, { useEffect, useState } from "react";
import HeaderWithButtons from "../../Components/HeaderWithButtons";
import { StyledBody } from "./styles";

import { getProcessTotalNumber } from "../../Services/Axios/processService";
import toast from "react-hot-toast";

const HomePage = () => {
  return (
    <>
      <HeaderWithButtons />
    </>
  );
};

export default HomePage;
