import Sidebar from "@/components/Sidebar";
import DashboardLayout from "@/features/dashboard/DashboardLayout";
import React from "react";

const page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full">
      <Sidebar />
      {children}
    </div>
  );
};

export default page;
