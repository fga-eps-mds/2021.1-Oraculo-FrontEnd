import React from "react";
import SectionMovBlock from "../SectionMovBlock";

const FowardSector = ({ sectors }) => {
  return (
    <>
      {sectors.map((sector) => (
        <SectionMovBlock fowardSector={sector} />
      ))}
    </>
  );
};

export default FowardSector;
