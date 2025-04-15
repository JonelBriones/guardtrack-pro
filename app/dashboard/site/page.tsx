"use client";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import React from "react";

const page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full">
      <Sidebar />
      {children}
      <Link href={"/create/site"}>Add site</Link>
    </div>
  );
};

export default page;
