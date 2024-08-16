import React, { useState } from "react";
import Link from "next/link";
import DarkModeStatus from "@/app/redux/status/darkModeStatus";
import axios from "axios";
import { emailRegex } from "../../register/components/Regex";
import { createHash } from "crypto";
import { useRouter } from "next/navigation";
import decodeVault from "./decodeVault";
import { useDispatch } from "react-redux";
import { API_URL } from "@/app/components/URL";
const Form = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let hashedPassword = "";
  const url = API_URL;
  const handleSubmit = async () => {
    hashedPassword = await createHash("sha256").update(password).digest("hex");
    event?.preventDefault();
    if (!emailRegex(email)) {
      alert("Invalid Email");
      return;
    }
    let token = "";
    try {
      await axios
        .post(`${url}/auth/issueToken`, {
          email: email,
          password: password,
        })
        .then((res) => {
          token = res.data.token;
        });
    } catch (error) {
      console.log(error);
    }

    const payload = {
      token: token,
      email: email,
      password: hashedPassword,
    };

    try {
      await axios.post(`${url}/auth/login`, payload).then((res) => {
        if (res.status === 200) {
          alert("Login Successful");

          const vault: object = {
            aes256Bit: res.data.aes256Bit,
            salt: res.data.salt,
            password: password,
          };

          let decodedVault: any = decodeVault(vault);

          dispatch({
            type: "UPDATE_USER_DATA",
            payload: decodedVault,
          });

          dispatch({
            type: "CHANGE_LOG_STATUS",
          });

          router.push("/dashboard");
        }
      });
    } catch (error: any) {
      console.error("Error:", error);
      if (error.response.status == 401) {
        alert("Invalid Credentials");
      }
    }
  };

  const dark = DarkModeStatus();

  return (
    <form
      onSubmit={handleSubmit}
      className={
        dark
          ? "text-white border-0 border-white flex flex-col"
          : "text-red-900 border-0 border-red-900 flex flex-col"
      }
    >
      <div className="text-base md:text-xl flex flex-col sm:flex-col lg:flex-row items-center ">
        <div className="page1">
          <div>
            <label>
              College Email: <br />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
                className={
                  dark
                    ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg"
                    : "p-2 rounded-lg"
                }
              />
            </label>
          </div>

          <div>
            <label>
              Port0 Password: <br />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
                className={
                  dark
                    ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg"
                    : "p-2 rounded-lg"
                }
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button type="submit">Login</button>
        <div className="text-sm">
          <p>
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Form;
