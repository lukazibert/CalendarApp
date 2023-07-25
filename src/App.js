import "./App.css";
import Calander from "./components/Calander";
import { DateProvider } from "./context/DateProvider";
import { useState, useEffect } from "react";

function App() {
  const [holidays, setHolidays] = useState([]);

  // Fetch the file and parse it
  useEffect(() => {
    const fetchFileAndRead = async () => {
      const filePath = "holidays.txt";

      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error("Failed to fetch the file.");
        }

        const text = await response.text();

        const parsedHolidays = text.split("\n").map((line) => {
          const [date, repeat] = line.split(",");
          return { date, repeat };
        });

        setHolidays(parsedHolidays);
      } catch (error) {
        console.error("Error reading the file:", error);
      }
    };

    fetchFileAndRead();
  }, []);

  return (
    <div className="App">
      <div className="background">
        <DateProvider>
          <Calander holidays={holidays} />
        </DateProvider>
      </div>
    </div>
  );
}

export default App;
