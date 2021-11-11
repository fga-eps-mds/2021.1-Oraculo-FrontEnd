import { useEffect, useState } from "react";
import { getRecordTagColors } from "../../Services/Axios/tagsService";

const TagsList = (props) => {
  const [tags, setTags] = useState([]);
  const [hasTags, sethasTags] = useState(false);

  useEffect(() => {
    async function fetchTags() {
      const [status, tagsList] = await getRecordTagColors(props.id);
      if (status === 200 && tagsList.length > 0) {
        setTags(tagsList);
        console.error(tags);
      }
    }

    fetchTags();
  }, [props.id]);

  useEffect(() => {
    sethasTags(true);
  }, [tags]);

  return (
    <>
      {!hasTags ? (
        <p>Carregando ...</p>
      ) : (
        tags.map((item) => (
          <span
            title={item.name}
            style={{
              borderRadius: "50%",
              width: "2.5rem",
              height: "2.5rem",
              margin: "1rem 0.5rem",
              background: item.color ? item.color : "",
            }}></span>
        ))
      )}
    </>
  );
};

export { TagsList };
