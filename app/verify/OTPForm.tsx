import DarkModeStatus from "../redux/status/darkModeStatus";
import { FormEvent } from "react";
import FormDataStatus from "../redux/status/formDataStatus";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
const { convertToAES } = require("@harshiyer/json-crypto");
// var jwt = require("jsonwebtoken");
import { API_URL } from "../components/URL";

const OTPForm = () => {
  const dark = DarkModeStatus();
  const data = FormDataStatus();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    console.log((data as any).FormData.collegeEmail);
    const password = (data as any).FormData.port0Password;
    const email: string = (data as any).FormData.collegeEmail;
    const convertedData = new convertToAES(data, password);
    const salt = (convertedData as any).salt;
    const aes256Bit = (convertedData as any).aesString;
    const keyHash = (convertedData as any).sha256key;

    let token: string = "";
    const url = API_URL; //add local db hosted url here

    try {
      await axios
        .post(`${url}/auth/issueToken`, {
          email: email,
        })
        .then((res) => {
          token = res.data.token;
        });
    } catch (error) {
      console.error("Error:", error);
    }

    const payload: any = {
      token: token,
      email: email,
      salt: salt,
      aes256Bit: aes256Bit,
      keyHash: keyHash,
    };
    try {
      axios
        .post(`${url}/auth/create`, payload, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error: any) {
      if (error.response.status == 500) {
        alert("Invalid Credentials");
      }

      console.error("Error:", error);
    }
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
      </form>
    </div>
  );
};

export default OTPForm;
