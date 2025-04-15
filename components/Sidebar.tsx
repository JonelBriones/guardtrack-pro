import Link from "next/link";
import React from "react";

const Sidebar = () => {
  const navLinks = ["Home", "My tasks", "inbox"];
  const navInnsights = ["Home", "My tasks", "inbox"];
  return (
    <div className="flex flex-col justify-between gap-4 w-64 bg-neutral-800 text-white">
      <div className="flex flex-col gap-2 p-6">
        <ul className="flex flex-col gap-2">
          <li>
            <Link href={"/home"}>Home</Link>
          </li>
          <li>
            <Link href={"/home"}>My Tasks</Link>
          </li>
          <li>
            <Link href={"/home"}>inbox</Link>
          </li>
        </ul>
        <hr className="border-neutral-600" />
        <span>Insights</span>
        <ul className="flex flex-col gap-2">
          <li>
            <button type="button">logbook</button>
          </li>
          <li>
            <button type="button">reports</button>
          </li>
        </ul>
        <hr className="border-neutral-600" />
        <span>Tools</span>
        <ul className="flex flex-col gap-2">
          <li>
            <Link href={"/dashboard/site/site_001/schedule"}>Schedule</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2 border-t pt-2 border-t-neutral-600">
        <div className="p-6">
          <button className="p-2 border-neutral-500 border w-full rounded-md cursor-pointer">
            Invite teammates
          </button>
          <span>Help</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
