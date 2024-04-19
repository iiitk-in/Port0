"use client";
import React from "react";
import { useState } from "react";

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  }
  return (
    <main className="flex-col bg-gradient-to-b from-amber-100 to-white dark:from-[#020024] dark:to-[#020024]">
      <button
        className="dark:bg-slate-800 border border-red-900 dark:border-gray-600 p-2 rounded-lg m-5 ml-auto size-10 flex align-center justify-center"
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

      <h1 className="dark:text-white text-4xl port0 my-2">Port0</h1>
      <section className="rounded-lg p-5 dark:text-white border md:max-w-3xl md:mt-9 border-red-900 dark:border-white backdrop-blur-3xl">
        <h3 className="block mb-3">
          <span className="port0">Port0</span>, the authentication service that
          is at the centre of IIITK.in.
        </h3>
        <h2 className="text-2xl">Safe.</h2>
        <span className="port0">Port0</span> doesn&apos;t requre your LMS
        password. It stores all your personal info in a 256-bit AES encrypted
        vault.
        <h2 className="text-2xl mt-3">Local.</h2>
        Whenver you login to any service, your vault is fetched from the server
        and decrypted locally on your device. Noone can access your data without
        your permission, not even us.
        <h2 className="text-2xl mt-3">Private.</h2>
        Only data that you authorize is shared with the service you are logging
        into.
      </section>

      <div className="grow"></div>

      <footer>
        <p className="dark:text-white text-center">
          &copy; 2024 <span className="port0">Port0</span> Team, IIITK.in
          <br />
          Liscensed under the MIT License.{" "}
          <a
            href="https://github.com/iiitk-in/port0"
            className="dark:text-white underline"
          >
            GitHub
          </a>
        </p>
      </footer>
    </main>
  );
}
