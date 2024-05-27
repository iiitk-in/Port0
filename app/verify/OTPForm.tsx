import DarkModeStatus from "../redux/status/darkModeStatus";
import { FormEvent } from "react";
import FormDataStatus from "../redux/status/formDataStatus";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
const { convertToAES } = require("@harshiyer/json-crypto");
// var jwt = require("jsonwebtoken");

const OTPForm = () => {
  const dark = DarkModeStatus();
  const data = useSelector((state: RootState) => state.formData);
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    console.log(data.FormData.collegeEmail);
    const password = data.FormData.port0Password;
    const email: string = data.FormData.collegeEmail;
    const convertedData = new convertToAES(data, password);
    const salt = (convertedData as any).salt;
    const aes256Bit = (convertedData as any).aes256Bit;
    const keyHash = (convertedData as any).sha256key;

    // var token = jwt.sign({ email: data.FormData.collegeEmail }, "testToken", {
    //   expiresIn: "1h",
    // });
    var token = "TOKEN"; //add token here
    const payload: any = {
      token: token,
      email: email,
      salt: salt,
      aes256Bit: "aes256Bit", //will work on ts types for npm package
      keyHash: keyHash,
    };
    const url = "http://localhost:XXXXX/auth/create"; //add local db hosted url here
    try {
      axios.post(url, payload).then((res) => {
        console.log(res);
      });
    } catch (error) {
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
