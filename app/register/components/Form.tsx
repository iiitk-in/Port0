"use client";
import { useState } from "react";
import { useSelector } from "react-redux";

import Link from "next/link";
import { RootState } from "@/app/redux/store";

const Form = () => {
  const [password, setPassword] = useState("");
  const [boxcolor, setBoxcolor] = useState("");
  const [visible, setVisible] = useState("block");
  const [strength, setStrength] = useState("Weak");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(false);
  const [disp, setDisp] = useState(false);
  const [dispotp, setDispotp] = useState(false);
  const [passdisp, setPassDisp] = useState(false);
  const [stage, setStage] = useState(0);
  const dark = useSelector((state: RootState) => state.darkMode);

  const handlePasswordChange = (event: any) => {
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
    if (status === false) {
      setDisp(true);
    } else if (password.length < 6) {
      setPassDisp(true);
    } else if (status === true) {
      setDispotp(true);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={
          dark
            ? "text-white border-2 border-white"
            : "text-red-900 border-2 border-red-900"
        }
      >
        <div className="text-20 flex flex-col sm:flex-col lg:flex-row items-center">
          <div className="page1">
            <div>
              <label>
                Name: <br />
                <input
                  type="text"
                  name="name"
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
                Roll Number: <br />
                <input
                  type="text"
                  name="roll"
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
                Email: <br />
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(evt) => validateEmail(evt.target.value)}
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
                  onChange={handlePasswordChange}
                  style={{ borderColor: boxcolor }}
                  className={
                    dark
                      ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg"
                      : "p-2 rounded-lg"
                  }
                />
                <div className="ml-10">
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
                  className={
                    dark
                      ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg mt-3"
                      : "bg-white p-2 rounded-lg mt-3"
                  }
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
                  className={
                    dark
                      ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg mt-3"
                      : "bg-white p-2 rounded-lg mt-3"
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
              <Link
                className={dark ? "text-white underline" : "underline"}
                href="/login"
              >
                {" "}
                Login
              </Link>
            </p>
          </footer>
        </div>
      </form>
    </div>
  );
};

export default Form;
