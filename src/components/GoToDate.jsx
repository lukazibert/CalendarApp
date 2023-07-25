import React, { useState } from "react";
import { useContext } from "react";
import DateContext from "../context/DateContext";

export default function DatePicker() {
  // get context data
  const dateContext = useContext(DateContext);

  const { selectedYear, selectedMonth, selectedDay } = dateContext;

  // set the initial state to the selected date
  const [day, setDay] = useState(selectedDay);
  const [month, setMonth] = useState(selectedMonth);
  const [year, setYear] = useState(selectedYear);


  function handleChange(year, month, day) {
    setDay(day);
    setMonth(month);
    setYear(year);
  }

  function handleSubmit() {
    dateContext.setSelectedDay(day);
    dateContext.setSelectedMonth(month);
    dateContext.setSelectedYear(year);
    dateContext.setDisplayedMonth(month);
    dateContext.setDisplayedYear(year);
  }

  return (
    <div className="d-flex mx-5 mt-5">
      <input
        type="date"
        className="form-control"
        value={`${year}-${month}-${day}`}
        onChange={(e) => {
            const [year, month, day] = e.target.value.split('-');
            handleChange(year, month, day);
          }}
      />
      <button className="btn btn-outline-dark px-5" onClick={handleSubmit}>
        Go
      </button>
    </div>
  );
}
