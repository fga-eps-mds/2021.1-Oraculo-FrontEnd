import { useEffect, useState } from "react";
import {
  getSections,
  getDepartments,
} from "../../Services/Axios/profileService";

const SectionsList = (type) => {
  const [sections, setSections] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [hasDepartments, sethasDepartments] = useState(false);
  const [hasSections, setHasSections] = useState(false);

  useEffect(() => {
    async function fetchSections() {
      const sectionsList = await getSections();
      setSections(sectionsList);
      console.log("SecList", sectionsList);
    }

    async function fetchDepartments() {
      const departmentsList = await getDepartments();
      setDepartments(departmentsList);
      console.log("DepList", departmentsList);
    }

    fetchSections();
    fetchDepartments();
  }, []);

  useEffect(() => {
    sethasDepartments(true);
  }, [departments]);

  useEffect(() => {
    setHasSections(true);
  }, [sections]);

  return (
    <>
      {!hasDepartments && !hasSections ? (
        <option>Loading</option>
      ) : type.type === "sections" ? (
        sections &&
        sections.map((item) => <option value={item.id}>{item.name}</option>)
      ) : (
        departments &&
        departments.map((item) => <option value={item.id}>{item.name}</option>)
      )}
    </>
  );
};

export { SectionsList };
