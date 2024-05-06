"use client";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import daisyui from "daisyui";

export default function Registration() {
  const [password, setPassword] = useState("");
  const [boxcolor, setBoxcolor] = useState("");
  const [visible, setVisible] = useState("block");
  const [strength, setStrength] = useState("Weak");
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);
  const [disp, setDisp] = useState(false);
  const [dispotp, setDispotp] = useState(false);
  const [passdisp, setPassDisp] = useState(false);
  function toggleDarkMode() {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setVisible("block");
    if (password.length < 5) {
      setBoxcolor("red");
      setStrength("Weak");
    } else if (password.length < 9) {
      setBoxcolor("#CC7722");
      setStrength("Medium");
    } else {
      setBoxcolor("green");
      setStrength("Strong");
    }
  };
  const validateEmail = (email: string) => {
    setEmail(email);
    const re = /^[a-zA-Z0-9._-]+@iiitkottayam.ac.in$/;
    if (re.test(email)) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  const handleSubmit = () => {
    setDisp(false);
    setDispotp(false);
    setPassDisp(false);
    event?.preventDefault();
    //will do this later
    if (status === false) {
      setDisp(true);
    } else if (password.length < 6) {
      setPassDisp(true);
    } else if (status === true) {
      setDispotp(true);
    }

    //post using axios to /auth/register with the body as email
    //redirect to /verify if all good
  };

  return (
    <main className="flex-col bg-gradient-to-b from-amber-100 to-white dark:from-[#020024] dark:to-[#020024]">
      <button
        className="dark:bg-slate-800 border border-red-900 dark:border-gray-600 p-2 rounded-lg mt-5 ml-auto size-10 mr-5 flex align-center justify-center mt-10"
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
      <section className="flex flex-col text-sm sm:text-base md:text-xl sm:flex-row sm:items-center h-screen p-4 md:p-10 justify-evenly">
        {" "}
        <div></div>
        <div className="heading">
          <h1 className="text-3xl flex-auto text-center p-3 dark:text-white text-red-900 md:mr-10">
            Register for the <span className="port0">Port0</span> Authentication
            Service
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="text-red-900 dark:text-white border-2 dark:border-white border-red-900"
        >
          <div className="text-20 flex flex-col sm:flex-col lg:flex-row items-center">
            <div className="page1">
              <div>
                <label>
                  Name: <br />
                  <input
                    type="text"
                    name="name"
                    className="dark:text-white dark:bg-slate-800 dark:border-gray-600 p-2 rounded-lg"
                  />
                </label>
              </div>
              <div>
                <label>
                  Roll Number: <br />
                  <input
                    type="text"
                    name="roll"
                    className="dark:text-white dark:bg-slate-800 dark:border-gray-600 p-2 rounded-lg"
                  />
                </label>
              </div>
              <div>
                <label>
                  Email: <br />
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(evt) => validateEmail(evt.target.value)}
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
                    onChange={handlePasswordChange}
                    style={{ borderColor: boxcolor }}
                    className="dark:text-white dark:bg-slate-800 dark:border-gray-600 p-2 rounded-lg"
                  />
                  <div className="ml-10 mb-0">
                    <p className="text-md" style={{ display: visible }}>
                      Password Strength:{" "}
                      <span style={{ color: boxcolor }}>{strength}</span>
                    </p>
                  </div>
                </label>
              </div>
            </div>
            <div className="page2">
              <div>
                <label>
                  Batch: <br />
                  <select
                    name="batch"
                    className="dark:text-white dark:bg-slate-800 bg-white dark:border-gray-600 p-2 rounded-lg mt-3"
                  >
                    <option value="batch1">Batch 1</option>
                    <option value="batch2">Batch 2</option>
                    <option value="batch3">Batch 3</option>
                  </select>
                </label>
              </div>
              <div className=" mt-3">
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
          <div className="flex justify-center mt-5">
            <div
              style={disp ? { display: "block" } : { display: "none" }}
              className="flex justify-center  alert alert-warning  text-center mx-5"
            >
              Oops! Use your college email.
            </div>
            <div
              style={dispotp ? { display: "block" } : { display: "none" }}
              className="flex justify-center  alert alert-success  text-center mx-5"
            >
              OTP Sent successfully!
            </div>
            <div
              style={passdisp ? { display: "block" } : { display: "none" }}
              className="flex justify-center  alert alert-warning  text-center mx-5"
            >
              Choose a stronger password!
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <button>Register</button>
            <footer className="text-sm">
              <p>
                Already have an account?{" "}
                <Link className="dark:text-white underline" href="/login">
                  Login
                </Link>
              </p>
            </footer>
          </div>
        </form>
      </section>
    </main>
  );
}
