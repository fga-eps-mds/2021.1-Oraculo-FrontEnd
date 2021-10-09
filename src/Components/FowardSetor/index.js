import React from "react";
import SectionMovBlock from "../SectionMovBlock";

const FowardSector = ({ foward }) => {
  return (
    <>
      {foward.map((sector) => (
        <SectionMovBlock fowardSector={sector} />
      ))}
    </>
  );
};

export default FowardSector;
