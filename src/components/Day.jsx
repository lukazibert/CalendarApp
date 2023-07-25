import React, { useContext, useEffect } from "react";
import DateContext from "../context/DateContext";

const Day = ({ day, isSelected, isSunday, holidays }) => {
  const dateContext = useContext(DateContext);

  // get context data
  const {
    setSelectedDay,
    setSelectedMonth,
    setSelectedYear,
    displayedMonth,
    displayedYear,
  } = dateContext;

  // handle onClick event
  const handleSelectDay = () => {
    setSelectedDay(day.key);
    setSelectedMonth(displayedMonth);
    setSelectedYear(displayedYear);
  };

  const styles = {
    day: {
      width: "50px",
      height: "50px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: isSelected ? "white" : isSunday ? "red" : "black",
      backgroundColor: isSelected ? "black" : "white",
      borderRadius: "12%",
      cursor: "pointer",
    },

    holidayDot: {
      height: "5px",
      width: "5px",
      backgroundColor: isSelected ? "white" : "grey",
      borderRadius: "50%",
    },
  };

  const isHoliday = (day) => {

    // create a date object from the day, month and year
    const date = new Date(displayedYear, displayedMonth - 1, day.key);
  

    const dateString = date.toLocaleDateString("en-CA", {
      year: "numeric", 
      month: "2-digit",
      day: "2-digit"
    });

    // format month and day to match the format of the date string
    const formatedMonth = displayedMonth < 10 ? `0${displayedMonth}` : displayedMonth;
    const formatedDay = day.key < 10 ? `0${day.key}` : day.key;

    // check if the date is a holiday
    return holidays.some(h => {
      if (h.date === dateString) {
        return true;
      }
      if (h.repeat === 'repeat' && 
          h.date.split('-')[1] === formatedMonth && 
          h.date.split('-')[2] === formatedDay) {
        return true;
      }
      return false;
    });
  
  };

  return (
    <div className="">
      <div className="" style={styles.day} onClick={() => handleSelectDay()}>
        {day}
        {isHoliday(day) && <div style={styles.holidayDot}></div>}
      </div>
    </div>
  );
};

export default Day;
