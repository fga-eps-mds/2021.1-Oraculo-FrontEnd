import { useEffect, useState } from "react";
import { getSections, getDepartments } from "../../Services/Axios/profileService";

const SectionsList = () => {
  const [sections, setSections] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [hasDepartments, sethasDepartments] = useState(false);
  const [hasSections, setHasSections] = useState(false);

  useEffect(() => {
    function fetchSections() {
      const sectionsList = getSections();
      console.log(JSON.stringify(sectionsList));
      setSections(sectionsList);
    }

    function fetchDepartments() {
      const departmentsList = getDepartments();
      setDepartments(departmentsList);
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
      ) : (
        <option>Loaded</option>
      )}
    </>
  );
};

export { SectionsList };
