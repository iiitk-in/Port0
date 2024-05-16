"use client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/darkMode/darkModeActions";
import { RootState } from "../redux/store";
const DarkModeButton = () => {
  const darkModeState = useSelector((state:RootState) => state.darkMode);
  const dispatch = useDispatch();

  function toggle() {
    dispatch(toggleDarkMode());
  }

  return (
    <button
      className={
        darkModeState
          ? "bg-slate-800 border-gray-600 p-2 rounded-lg ml-auto size-10 mr-5 flex align-center justify-center"
          : "border border-red-900 p-2 rounded-lg ml-auto size-10 mr-5 flex align-center justify-center"
      }
      onClick={toggle}
    >
      {darkModeState ? (
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
  );
};

export default DarkModeButton;
