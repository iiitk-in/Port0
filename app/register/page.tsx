"use client";
import { useSelector } from "react-redux";
import React from "react";
import Form from "./components/Form";
import NavBar from "../components/NavBar";
import { RootState } from "../redux/store";
export default function Registration() {
  const dark = useSelector((state: RootState) => state.darkMode);

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
            Register for the <span className="port0">Port0</span> Authentication
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
