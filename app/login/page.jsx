"use client";
import React from "react";
import Form from "./components/Form";
import { useSelector } from "react-redux";

import NavBar from "../components/NavBar";

export default function Registration() {
  const dark = useSelector((state) => state.darkMode);

  return (
    <main
      className={
        dark
          ? "flex-col bg-gradient-to-b from-[#020024] to-[#020024]"
          : "flex-col bg-gradient-to-b from-amber-100 to-white"
      }
    >
      <NavBar />
      <main className="flex flex-col items-center text-sm sm:text-base sm:text-xl sm:flex-row sm:items-center h-screen p-5 md:p-10 justify-evenly ">
        {" "}
        <div className="heading  sm:mr-12">
          <h1
            className={
              dark
                ? "text-3xl flex-auto text-center p-3 text-white"
                : "text-3xl flex-auto text-center p-3 text-red-900"
            }
          >
            Login to the <span className="port0">Port0</span> Authentication
            Service
          </h1>
        </div>
        <Form />
      </main>
    </main>
  );
}
