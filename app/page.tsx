"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import NavBar from "./components/NavBar";
import DarkModeStatus from "./redux/status/darkModeStatus";

export default function Page() {
  const dark = DarkModeStatus();
  return (
    <section
      className={
        dark
          ? "overflow-auto h-screen flex-col bg-gradient-to-b from-[#020024] to-[#020024] sm:overflow-x-hidden"
          : "overflow-auto h-screen flex-col bg-gradient-to-b from-amber-100 to-white sm:overflow-x-hidden "
      }
    >
      {" "}
      <div>
        <NavBar />
      </div>
      <div className="flex flex-col grow">
        <h1
          className={
            dark
              ? "text-white text-4xl port0 text-center mb-4"
              : "text-4xl port0 text-center mb-4"
          }
        >
          Port0
        </h1>
        <div className="flex mx-4">
          <section
            className={
              dark
                ? "p-12 rounded-lg text-white border md:max-w-3xl md:mt-9 border-white backdrop-blur-3xl transition-all duration-300 ease-out flex flex-col justify-center w-screen ml-auto mr-auto"
                : "p-12 rounded-lg border md:max-w-3xl md:mt-9 border-red-900 backdrop-blur-3xl transition-all duration-300 ease-out flex flex-col justify-center w-screen ml-auto mr-auto"
            }
          >
            <h3 className="block mb-3 text-2xl">
              <span className="port0">Port0</span>, the authentication service
              that is at the centre of IIITK.in.
            </h3>
            <h2 className="text-2xl">Safe.</h2>
            <span>
              <span className="port0">Port0</span> doesn&apos;t requre your LMS
              password. It stores all your personal info in a 256-bit AES
              encrypted vault.
            </span>
            <h2 className="text-2xl mt-3">Local.</h2>
            Whenver you login to any service, your vault is fetched from the
            server and decrypted locally on your device. Noone can access your
            data without your permission, not even us.
            <h2 className="text-2xl mt-3">Private.</h2>
            Only data that you authorize is shared with the service you are
            logging into.<br></br>
            <br></br>
            <Link
              href="/register"
              className={
                dark
                  ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg flex justify-center items-center w-30 mt-4"
                  : "text-maroon border border-red-900 p-2 rounded-lg flex justify-center items-center w-30 mt-4"
              }
            >
              Register
            </Link>
          </section>
        </div>
        <div className="grow"></div>
        <footer className="flex justify-center mt-4 grow">
          <p className={dark ? "text-white text-center" : "text-center"}>
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
      </div>
    </section>
  );
}
