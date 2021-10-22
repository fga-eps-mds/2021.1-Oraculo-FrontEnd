import React from "react";
import SectionMovBlock from "../SectionMovBlock";

const ForwardSector = ({ forward }) => {
  return (
    <>
      {forward.map((sector) => (
        <SectionMovBlock forwardSector={sector} />
      ))}
    </>
  );
};

export default ForwardSector;
