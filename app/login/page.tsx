"use client";
import Link from "next/link";
import { useState } from "react";
import React from "react";

export default function Registration() {
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  }

  const handleSubmit = () => {
    //will do this later
  };

  return (
    <main className="flex-col bg-gradient-to-b from-amber-100 to-white dark:from-[#020024] dark:to-[#020024]">
      <button
        className="dark:bg-slate-800 border border-red-900 dark:border-gray-600 p-2 rounded-lg mt-5 mr-5 ml-auto size-10 flex align-center justify-center mt-10"
        onClick={toggleDarkMode}
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="maroon"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        )}
      </button>
      <main className="flex flex-col text-sm md:text-base md:flex-row md:items-center h-screen p-4 md:p-10 justify-evenly ">
        {" "}
        <div className="heading">
          <h1 className="text-3xl flex-auto text-center p-3 dark:text-white text-red-900 md:mr-10">
            Login to the <span className="port0">Port0</span> Authentication
            Service
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="text-red-900 dark:text-white border-2 dark:border-white border-red-900"
        >
          <div className="text-xl flex flex-col sm:flex-col lg:flex-row items-center ">
            <div className="page1">
              <div>
                <label>
                  Email: <br />
                  <input
                    type="email"
                    name="email"
                    className="dark:text-white dark:bg-slate-800 dark:border-gray-600 p-2 rounded-lg"
                  />
                </label>
              </div>

              <div>
                <label>
                  Password: <br />
                  <input
                    type="password"
                    name="password"
                    value={password}
                    className="dark:text-white dark:bg-slate-800 dark:border-gray-600 p-2 rounded-lg"
                  />
                </label>
              </div>
            </div>
            <div className="page2">
              <div>
                <label>
                  Year: <br />
                  <select
                    name="year"
                    className="dark:text-white dark:bg-slate-800 bg-white dark:border-gray-600 p-2 rounded-lg mt-3"
                  >
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2023">2024</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button>Login</button>
            <footer className="text-sm">
              <p>
                Don't have an account? <Link href="/register">Register</Link>
              </p>
            </footer>
          </div>
        </form>
      </main>
    </main>
  );
}
