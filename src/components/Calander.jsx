import { useState } from "react";
import MonthPicker from "./MonthPicker";
import YearPicker from "./YearPicker";
import "../styles/Calendar.css";
import DayGrid from "./DayGrid";
import GoToDate from "./GoToDate";

const Calendar = ({holidays}) => {
  return (
    <div className="calendar">
      <div className="header d-flex flex-row justify-content-between">
        <MonthPicker />
        <YearPicker />
      </div>
      <div className="separator"></div>
      <DayGrid holidays={holidays}/>
      <GoToDate />
    </div>
  );
};

export default Calendar;
