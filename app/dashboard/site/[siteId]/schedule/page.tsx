import CalendarSchedule from "@/components/CalendarSchedule";
import Sidebar from "@/components/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <CalendarSchedule />
    </div>
  );
};

export default page;
