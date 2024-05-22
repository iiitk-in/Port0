"use client";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { FormEvent } from "react";
import { useEffect } from "react";

const Verify = () => {
  const dark = useSelector((state: RootState) => state.darkMode);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  let email: string = "";
  if (typeof window !== "undefined") {
    email = localStorage.getItem("email") ?? "";
  }

  return (
    <div
      className={
        dark
          ? "text-white h-screen overflow-auto flex flex-col bg-gradient-to-b from-[#020024] to-[#020024] transition-all duration-500 ease-in-out"
          : "text-maroon h-screen overflow-auto flex flex-col bg-gradient-to-b from-amber-100 to-white transition-all duration-500 ease-in-out"
      }
    >
      <div className="h-screen">
        <NavBar />
        <div className="flex lg:flex-row flex-col justify-center align-center mt-12">
          <div className=" flex  justify-center align-center mt-10 mb-auto lg:mr-20">
            <p className="lg:text-3xl text-lg text-center mr-5 ml-5">
              Enter the verification code sent to your mail address<br></br>{" "}
              {/* <span className="underline">{email}</span> */}
            </p>
          </div>
          <form
            className="flex flex-col justify-center align-center lg:mr-20"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="Enter your verification code"
                className={
                  dark
                    ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg"
                    : "p-2 rounded-lg"
                }
              />
            </div>
            <div className="flex justify-center ">
              <button
                type="submit"
                className={
                  dark
                    ? "bg-slate-800 border-0 p-2 rounded-lg  flex align-center justify-center"
                    : "bg-transparent hover:bg-amber-100 border border-red-900 p-2 rounded-lg  flex align-center justify-center"
                }
              >
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Verify;
