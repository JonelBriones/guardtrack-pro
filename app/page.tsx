"use client";

import Image from "next/image";
import { redirect } from "next/navigation";

export default function Home() {
  const session = true;

  if (session) {
    redirect("/dashboard");
  } else {
    redirect("/login");
  }
}
