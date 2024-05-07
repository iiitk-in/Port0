"use client";
import React from "react";
import Form from "./components/Form";
import NavBar from "../components/NavBar";
export default function Registration() {
  return (
    <div className="flex-col bg-gradient-to-b from-amber-100 to-white dark:from-[#020024] dark:to-[#020024] h-screen overflow-y-scroll">
      <NavBar />
      <div className="flex flex-col items-center text-l sm:text-base sm:text-xl sm:flex-row sm:items-center sm:mt-20 p-5 sm:p-10 justify-evenly ">
        {" "}
        <div className="heading  sm:mr-12 lg:mb-10">
          <h1 className="text-3xl flex-auto text-center p-3 dark:text-white text-red-900">
            Register for the <span className="port0">Port0</span> Authentication
            Service
          </h1>
        </div>
        <Form />
      </div>
    </div>
  );
}
