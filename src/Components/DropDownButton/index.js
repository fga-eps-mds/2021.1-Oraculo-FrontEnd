import { useEffect, useState } from "react";
import { getSections } from "../../Services/Axios/profileService";
import DivSelectSetor from "./DivSelectSetor";

const DropDownButton = ({ onChangeOpt }) => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    async function fetchSections() {
      const sectionsList = await getSections();
      setSections(sectionsList);
      console.log("SecList", sectionsList);
    }

    fetchSections();
  }, []);

  return (
    <DivSelectSetor>
      <select onChange={onChangeOpt}>
        {sections.map(
          (item) =>
            item.name !== "none" && <option value={item.id}>{item.name}</option>
        )}
      </select>
    </DivSelectSetor>
  );
};

export default DropDownButton;
