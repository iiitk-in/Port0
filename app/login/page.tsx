"use client";
import React from "react";
import Form from "./components/Form";
import NavBar from "../components/NavBar";

export default function Registration() {
  return (
    <main className="flex-col bg-gradient-to-b from-amber-100 to-white dark:from-[#020024] dark:to-[#020024]">
      <NavBar />
      <main className="flex flex-col items-center text-sm sm:text-base sm:text-xl sm:flex-row sm:items-center h-screen p-5 md:p-10 justify-evenly ">
        {" "}
        <div className="heading  sm:mr-12">
          <h1 className="text-3xl flex-auto text-center p-3 dark:text-white text-red-900">
            Login to the <span className="port0">Port0</span> Authentication
            Service
          </h1>
        </div>
        <Form />
      </main>
    </main>
  );
}
