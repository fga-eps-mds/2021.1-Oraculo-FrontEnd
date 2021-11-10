import { useEffect, useState } from "react";
import { getRecordTagColors } from "../../Services/Axios/tagsService";

const TagsList = (id) => {
  const [tags, setTags] = useState([]);
  const [hasTags, sethasTags] = useState(false);

  useEffect(() => {
    async function fetchTags() {
      const tagsList = await getRecordTagColors(id);
      if (tagsList.length > 0) {
        setTags(tagsList);
      }
    }

    fetchTags();
  }, []);

  useEffect(() => {
    sethasTags(true);
  }, [tags]);

  return (
    <>
      {!hasTags ? (
        <a>Carregando ...</a>
      ) : (
        tags.map((item) => (
          <span
            style={{
              borderRadius: "50%",
              width: "2.5rem",
              height: "2.5rem",
              margin: "1rem 0.5rem",
              background: item.color ? item.color : "",
            }}
          ></span>
        ))
      )}
    </>
  );
};

export { TagsList };
