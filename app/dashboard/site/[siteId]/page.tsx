"use client";
import React, { useState } from "react";
import sites from "@/data/sites.json";
import { useParams } from "next/navigation";
import Dashboard from "@/features/dashboard/dashboard";
const page = () => {
  const { siteId } = useParams<{ siteId: string }>();
  console.log(siteId);
  const [view, setView] = useState("dashboard");
  return <Dashboard />;
};

export default page;
