import React from "react";
import "../styles/MonthPicker.css";
import DateContext from "../context/DateContext";
import { useContext } from "react";

const MonthPicker = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // get context data
  const dateContext = useContext(DateContext);

  const { displayedMonth, setDisplayedMonth } = dateContext;

  // handle month change
  const handleMonthSelect = (event) => {
    const pickedMonth = parseInt(event.target.value, 10);
    setDisplayedMonth(pickedMonth + 1);
  };

  return (
    <select
      value={displayedMonth-1}
      onChange={handleMonthSelect}
    >
      {months.map((month, index) => (
        <option key={index} value={index} style={{}}>
          {month}
        </option>
      ))}
    </select>
  );
};

export default MonthPicker;
