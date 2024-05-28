"use client";
import NavBar from "../components/NavBar";
import DarkModeStatus from "../redux/status/darkModeStatus";
import Details from "./Details";

const Dashboard = () => {
  const name = "John Doe";
  const dark = DarkModeStatus();

  return (
    <div
      className={
        dark
          ? "h-screen overflow-auto flex flex-col bg-gradient-to-b from-[#020024] to-[#020024] text-white transition-all duration-500 ease-in"
          : "h-screen overflow-auto flex flex-col bg-gradient-to-b from-amber-100 to-white text-black transition-all duration-500 ease-in"
      }
    >
      <NavBar />
      <div>
        <h1
          className={
            dark
              ? "md:text-4xl text-4xl ml-5 my-10 font-extrabold"
              : "md:text-4xl text-4xl ml-5 my-10 font-extrabold text-red-900"
          }
        >
          Welcome, {name}
        </h1>
        <div>
          <Details />
          <div className="flex justify-center align-center mt-5">
            <button
              className={
                dark
                  ? "text-white text-xl bg-slate-800 border-0 p-2 rounded-lg flex align-center justify-center mb-10"
                  : "text-xl  bg-red hover:bg-beige-800 border border-red-900 p-2 rounded-lg  flex align-center justify-center mb-10"
              }
            >
              Edit Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
