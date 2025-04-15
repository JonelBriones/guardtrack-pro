"use client";
import Sidebar from "@/components/Sidebar";
import { redirect } from "next/navigation";
import React from "react";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex">{children}</div>;
};

export default Dashboard;
