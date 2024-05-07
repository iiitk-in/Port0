import React, { useState } from "react";
import Link from "next/link";
const Form = () => {
    const [password, setPassword] = useState("");
    const handleSubmit = () => {
        event?.preventDefault();
    //will do this later
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="text-red-900 dark:text-white border-2 dark:border-white border-red-900"
    >
      <div className="text-l flex flex-col sm:flex-col lg:flex-row items-center ">
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
                onChange={(evt) => setPassword(evt.target.value)}
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
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Register
            </Link>
          </p>
        </footer>
      </div>
    </form>
  );
};

export default Form;
