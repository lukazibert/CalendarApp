import React from "react";
import "../styles/YearPicker.css";
import DateContext from "../context/DateContext";
import { useContext } from "react";

const YearPicker = () => {

  const dateContext = useContext(DateContext);

  const { displayedYear, setDisplayedYear } = dateContext;

  // handle year change
  const handleYearInput = (event) => {
    const selectedYear = parseInt(event.target.value, 10);
    setDisplayedYear(selectedYear);
  };

  return (
    <input
      type="number"
      value={displayedYear}
      onChange={handleYearInput}
    />
  );
};

export default YearPicker;
