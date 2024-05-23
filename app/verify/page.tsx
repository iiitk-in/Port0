"use client";
import NavBar from "../components/NavBar";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import DarkModeStatus from "../redux/status/darkModeStatus";
import OTPForm from "./OTPForm";
const Verify = () => {
  const email = useSelector((state: RootState) => state.email.email);
  const dark = DarkModeStatus();
  
  useEffect(() => {
    document.title = "Verify";
  }, []);
  if (email !== "") {
    return (
      <div
        className={
          dark
            ? "text-white h-screen overflow-auto flex flex-col bg-gradient-to-b from-[#020024] to-[#020024] transition-all duration-500 ease-in-out"
            : "text-red-900 h-screen overflow-auto flex flex-col bg-gradient-to-b from-amber-100 to-white transition-all duration-500 ease-in-out"
        }
      >
        <div className="h-screen">
          <NavBar />
          <div className="flex lg:flex-row flex-col justify-center align-center mt-12">
            <div className=" flex  justify-center align-center mt-10 mb-auto lg:mr-20">
              <p className="lg:text-3xl text-lg text-center mr-5 ml-5">
                Enter the verification code sent to your mail address<br></br>{" "}
                {email}
              </p>
            </div>
            <OTPForm />
          </div>
        </div>
      </div>
    );
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      window.location.href = "/register";
    }
    );
    return (
      <div>
        <p>Redirecting to register page...</p>
      </div>
    );
  }
};

export default Verify;
