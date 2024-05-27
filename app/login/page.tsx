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
    <section
      className={
        dark
          ? "h-screen sm:h-screen overflow-auto flex flex-col bg-gradient-to-b from-[#020024] to-[#020024]"
          : "h-screen sm:h-screen overflow-auto flex flex-col bg-gradient-to-b from-amber-100 to-white"
      }
    >
      <NavBar />
      <div className="flex flex-grow sm:flex sm:flex-grow">
        <div className="sm:flex sm:flex-row sm:items-center justify-evenly sm:grow flex flex-col justify-center sm:mr-8 mx-8">
          <div className="heading">
            <h1
              className={
                dark
                  ? "text-3xl text-center p-3 text-white"
                  : "text-3xl text-center p-3 text-red-900"
              }
            >
              Login to the <span className={roboto_mono.className}>Port0</span> Authentication
            </h1>
          </div>
          <div className="mb-12 ">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
