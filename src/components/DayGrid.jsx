import React, { useEffect } from "react";
import { useState, useContext } from "react";
import "../styles/DayGrid.css";
import Day from "./Day";
import DateContext from "../context/DateContext";

const DayGrid = ({ holidays }) => {
  // get context data
  const dateContext = useContext(DateContext);

  const {
    selectedYear,
    selectedMonth,
    selectedDay,
    displayedYear,
    displayedMonth,
  } = dateContext;

  // get the first day of the month to calculate empty days
  const firstDay = new Date(displayedYear, displayedMonth, 1);

  const daysBefore = firstDay.getDay();
  const emptyDays = Array.from({ length: daysBefore }, () => <span></span>);

  // get the number of days in the month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(displayedMonth, displayedYear);

  const days = Array.from({ length: daysInMonth }, (_, i) => (
    <span key={i + 1}>{i + 1}</span>
  ));

  // check if the day is a sunday
  const isSunday = (day) => {
    const date = new Date(displayedYear, displayedMonth, day.key);
    return date.getDay() === 0;
  };

  // check if the day is selected
  const isSelected = (day) => {
    const selectedDate = new Date(selectedYear, selectedMonth, selectedDay);
    const currentDate = new Date(displayedYear, displayedMonth, day.key);
    return selectedDate.toDateString() === currentDate.toDateString();
  };

  return (
    <div className="">
      <div className="day-lable-row">
        {/* display day labels */}
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div className="day-label" key={day}>
            {day}
          </div>
        ))}
      </div>
      <div className="grid">
        {/* display empty days */}
        {emptyDays}
        {/* display days */}
        {days.map((day) => (
          <Day
            day={day}
            isSelected={isSelected(day)}
            isSunday={isSunday(day)}
            holidays={holidays}
          />
        ))}
      </div>
    </div>
  );
};

export default DayGrid;
