import React from "react";

interface DayProps {
  year: number;
  month: number;
  day: number;
}

const DayOfWeek: React.FC<DayProps> = ({ year, month, day }) => {
  const dayNames = ["Sunday", "Monday", "Tuesday"];

  const days = new Date(`${year}-${month}-${day}`);
  return (
    <>
      <h1>{dayNames[days.getDay()]}</h1>
    </>
  );
};

export default DayOfWeek;
