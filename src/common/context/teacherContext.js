import { createContext, useContext, useState } from "react";

const TeacherContext = createContext(null);

export const useTeacherContext = () => useContext(TeacherContext);

export const TeacherContextProvider = ({ initialValue, children }) => {
  const [currentTeacher, setCurrentTeacher] = useState(initialValue);

  const params = { setCurrentTeacher, currentTeacher };

  return (
    <TeacherContext.Provider value={params}>{children}</TeacherContext.Provider>
  );
};
