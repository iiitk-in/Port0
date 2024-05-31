import DarkModeStatus from "../redux/status/darkModeStatus";
import { FormEvent } from "react";
import FormDataStatus from "../redux/status/formDataStatus";
import axios from "axios";
const { convertToAES } = require("@harshiyer/json-crypto");
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
    const url = API_URL;

    try {
      await axios
        .post(`${url}/auth/issueToken`, {
          email: email,
        })
        .then((res) => {
          token = res.data.token;
        });
    } catch (error) {
      console.log(error);
    }

    const payload: any = {
      token: token,
      email: email,
      salt: salt,
      aes256Bit: aes256Bit,
      keyHash: keyHash,
    };
    try {
      await axios.post(`${url}/auth/create`, payload).then((res) => {
        if (res.status === 200) {
          alert("Account Created Successfully");
        }
      });
    } catch (error) {
      if (error.response.status === 401) {
        alert("Account already exists!");
      } else if (error.response.status === 400) {
        alert("Invalid Email");
      } else if (error.response.status === 500) {
        alert("Server error");
      }
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
