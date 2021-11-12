import { useEffect, useState } from "react";
import { getDepartments } from "../../Services/Axios/profileService";

const SectionsList = (type) => {
  const [departments, setDepartments] = useState([]);
  const [hasDepartments, sethasDepartments] = useState(false);

  useEffect(() => {
    async function fetchDepartments() {
      const departmentsList = await getDepartments();
      setDepartments(departmentsList);
    }

    fetchDepartments();
  }, []);

  useEffect(() => {
    sethasDepartments(true);
  }, [departments]);

  return (
    <>
      {!hasDepartments ? (
        <option>Loading</option>
      ) : (
        departments &&
        departments.map(
          (item) =>
            item.name !== "none" && <option value={item.id}>{item.name}</option>
        )
      )}
    </>
  );
};

export { SectionsList };
