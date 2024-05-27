"use client";
import React from "react";
import Form from "./components/Form";
import NavBar from "../components/NavBar";
import DarkModeStatus from "../redux/status/darkModeStatus";
import { Roboto_Mono } from "next/font/google";
const roboto_mono = Roboto_Mono({
  weight: '400',
  subsets: ['latin'],
})
export default function Registration() {
  const dark = DarkModeStatus();

  return (
    <div
      className={
        dark
          ? "h-screen overflow-auto flex flex-col bg-gradient-to-b from-[#020024] to-[#020024] "
          : "h-screen overflow-auto flex flex-col bg-gradient-to-b from-amber-100 to-white "
      }
    >
      <NavBar />
      <div className="sm:flex sm:flex-grow sm:flex-row sm:items-center sm:justify-around p-4">
        <div>
          <h1
            className={
              dark
                ? "text-3xl text-center p-3 text-white"
                : "text-3xl text-center p-3 text-red-900"
            }
          >
            Register for the <span className={roboto_mono.className}>Port0</span> Authentication
            Service
          </h1>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}
