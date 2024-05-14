"use client";
import { useSelector } from "react-redux";
import React from "react";
import Form from "./components/Form";
import NavBar from "../components/NavBar";
export default function Registration() {
  const dark = useSelector((state) => state.darkMode);

  return (
    <div
      className={
        dark
          ? "flex-col bg-gradient-to-b from-[#020024] to-[#020024] h-screen overflow-y-scroll"
          : "flex-col bg-gradient-to-b from-amber-100 to-white h-screen overflow-y-scroll"
      }
    >
      <NavBar />
      <div className="flex flex-col items-center text-l sm:text-base sm:text-xl sm:flex-row sm:items-center sm:mt-20 p-5 sm:p-10 justify-evenly ">
        {" "}
        <div className="heading  sm:mr-12 lg:mb-10">
          <h1
            className={
              dark
                ? "text-3xl flex-auto text-center p-3 text-white"
                : "text-3xl flex-auto text-center p-3 text-red-900"
            }
          >
            {" "}
            Register for the <span className="port0">Port0</span> Authentication
            Service
          </h1>
        </div>
        <Form />
      </div>
    </div>
  );
}
