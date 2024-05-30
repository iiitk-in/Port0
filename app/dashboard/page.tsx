"use client";
import NavBar from "../components/NavBar";
import DarkModeStatus from "../redux/status/darkModeStatus";
import LoggedInStatus from "../redux/status/loggedInStatus";
import UserDataStatus from "../redux/status/userDataStatus";
import Details from "./Details";
import HomePage from "./HomePage";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  const logInStatus = LoggedInStatus();
  if (logInStatus) {
    return (
      <>
        <HomePage />;
      </>
    );
  } else {
    router.push("/login");
  }
};

export default Dashboard;
