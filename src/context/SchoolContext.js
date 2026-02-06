import React, { createContext, useContext, useMemo, useState } from "react";
import { mockSchoolData } from "../data/mockData";

const SchoolContext = createContext(null);

export const SchoolProvider = ({ children }) => {
  const [school] = useState(mockSchoolData.school);
  const [students] = useState(mockSchoolData.students);
  const [staff] = useState(mockSchoolData.staff);
  const [classes] = useState(mockSchoolData.classes);
  const [subjects] = useState(mockSchoolData.subjects);
  const [announcements] = useState(mockSchoolData.announcements);

  const value = useMemo(
    () => ({
      school,
      students,
      staff,
      classes,
      subjects,
      announcements
    }),
    [school, students, staff, classes, subjects, announcements]
  );

  return <SchoolContext.Provider value={value}>{children}</SchoolContext.Provider>;
};

export const useSchool = () => useContext(SchoolContext);
