import DarkModeStatus from "../redux/status/darkModeStatus";
import { FormEvent } from "react";

const OTPForm = () => {
    const dark = DarkModeStatus();
    const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <div>
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
                : "p-2 rounded-lg hover:border-red-800"
            }
          />
        </div>
        <div className="flex justify-center ">
          <button
            type="submit"
            className={
              dark
                ? "bg-slate-800 border-0 p-2 rounded-lg flex align-center justify-center"
                : " bg-red hover:bg-gray-800 border border-red-900 p-2 rounded-lg  flex align-center justify-center"
            }
          >
            Verify
          </button>
        </div>
        <p
          className={
            dark
              ? "text-center border-2 border-white rounded-md p-2 flex mr-auto ml-auto px-10 justify-center mt-5"
              : "text-center border-2 border-red-900 rounded-md p-2 flex mr-auto ml-auto px-10 justify-center mt-5"
          }
        >
          Don&apos;t reload this page!
        </p>
      </form>
    </div>
  );
};

export default OTPForm;