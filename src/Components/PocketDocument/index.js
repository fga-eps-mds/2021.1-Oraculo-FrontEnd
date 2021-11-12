import React, { useEffect, useState } from "react";
import { TagsList } from "../../Pages/ViewRecord/tags";
import { getRecordTagColors } from "../../Services/Axios/tagsService";

import { StyledBigDiv } from "./styles";

const PocketDocument = ({
  registerNumber,
  city,
  state,
  requester,
  inclusionDate,
  seiNumber,
  registerId,
}) => {
  const [tags, setTags] = useState([]);
  const [hasTags, sethasTags] = useState(false);

  useEffect(() => {
    async function fetchTags() {
      const [status, tagsList] = await getRecordTagColors(registerId);
      if (status === 200 && tagsList.length > 0) {
        setTags(tagsList);
        console.error(tags);
      }
    }

    fetchTags();
  }, [registerId]);

  useEffect(() => {
    sethasTags(true);
  }, [tags]);

  return (
    <StyledBigDiv>
      <a href={`/ver-registro/${registerId}`} class="registerNumber">
        {registerNumber}
      </a>
      <a href={`/ver-registro/${registerId}`} class="city">
        {city}
      </a>
      <a href={`/ver-registro/${registerId}`} class="state">
        {state}
      </a>
      <a href={`/ver-registro/${registerId}`} class="requester">
        {requester}
      </a>
      <a href={`/ver-registro/${registerId}`} class="inclusionDate">
        {inclusionDate}
      </a>
      <a
        style={{ marginRight: "2rem" }}
        href={`/ver-registro/${registerId}`}
        class="seiNumber"
      >
        {seiNumber}
      </a>
      {!hasTags ? (
        <p>-</p>
      ) : (
        tags.map((item, index) => {
          return (
            index <= 2 && (
              <a
                title={item.name}
                href={`/ver-registro/${registerId}`}
                style={{
                  cursor: "pointer",
                  borderRadius: "50%",
                  width: "2.5rem",
                  height: "2.5rem",
                  margin: "1rem 0.5rem",
                  background: item.color ? item.color : "",
                }}
              ></a>
            )
          );
        })
      )}
    </StyledBigDiv>
  );
};

export default PocketDocument;
