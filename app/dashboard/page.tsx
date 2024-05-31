"use client";
import LoggedInStatus from "../redux/status/loggedInStatus";
import HomePage from "./HomePage";
import { useRouter } from "next/navigation";
import DarkModeStatus from "../redux/status/darkModeStatus";
const Dashboard = () => {
  const router = useRouter();
  const logInStatus = LoggedInStatus();
  const dark = DarkModeStatus();
  if (logInStatus) {
    return (
      <div
        className={
          dark
            ? "h-screen overflow-auto flex flex-col bg-gradient-to-b from-[#020024] to-[#020024] text-white transition-all duration-500 ease-in"
            : "h-screen overflow-auto flex flex-col bg-gradient-to-b from-amber-100 to-white text-black transition-all duration-500 ease-in"
        }
      >
        <HomePage />
      </div>
    );
  } else {
    router.push("/login");
  }
};

export default Dashboard;
