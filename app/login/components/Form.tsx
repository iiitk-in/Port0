import React, { useState } from "react";
import Link from "next/link";
import DarkModeStatus from "@/app/redux/status/darkModeStatus";
const Form = () => {
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    event?.preventDefault();
    //will do this later
  };
  const dark = DarkModeStatus();
  return (
    <form
      onSubmit={handleSubmit}
      className={
        dark
          ? "text-white border-2 border-white flex flex-col"
          : "text-red-900 border-2 border-red-900 flex flex-col"
      }
    >
      <div className="text-base md:text-xl flex flex-col sm:flex-col lg:flex-row items-center ">
        <div className="page1">
          <div>
            <label>
              Email: <br />
              <input
                type="email"
                name="email"
                className={
                  dark
                    ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg"
                    : "p-2 rounded-lg"
                }
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
                onChange={(evt) => setPassword(evt.target.value)}
                className={
                  dark
                    ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg"
                    : "p-2 rounded-lg"
                }
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
                className={
                  dark
                    ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg mt-3 flex w-40 md:ml-4"
                    : "bg-white p-2 rounded-lg mt-3 flex w-40 md:ml-4"
                }
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
        <div className="text-sm">
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Form;
