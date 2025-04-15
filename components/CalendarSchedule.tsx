"use client";
import React, { useState } from "react";
import { Calendar } from "./ui/calendar";

const CalendarSchedule = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="flex flex-col ">
      {/* <div className="flex w-full">
        {days.map((day) => (
          <div key={day} className="p-2 border size-40">
            <span className="">{day}</span>
          </div>
        ))}
      </div> */}
      <Calendar
        // mode="single"
        // selected={date}
        // onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
};

export default CalendarSchedule;
