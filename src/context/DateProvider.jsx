import { useState } from "react";
import DateContext from "./DateContext";

export const DateProvider = ({ children }) => {
  const today = new Date();

  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth() + 1);
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  const [displayedYear, setDisplayedYear] = useState(today.getFullYear());
  const [displayedMonth, setDisplayedMonth] = useState(today.getMonth() + 1);

  return (
    <DateContext.Provider
      value={{
        selectedYear,
        setSelectedYear,
        selectedMonth,
        setSelectedMonth,
        selectedDay,
        setSelectedDay,
        displayedYear,
        setDisplayedYear,
        displayedMonth,
        setDisplayedMonth,
      }}
    >
      {children}
    </DateContext.Provider>
  );
};

