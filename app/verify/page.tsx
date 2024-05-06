"use client";
import react from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import crypto from 'crypto';

var pbkdf2 = require('pbkdf2')

const Verify = () => {

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //post to /auth/verify with the OTP and the email
    //response will be a jwt token
    //then perform the hashing for /auth/create
    //then redirect to /create

  };
  const [salt, setSalt] = useState(''); 
  setSalt(crypto.randomBytes(16).toString('base64'));
  const [token,setToken] = useState(''); // get this from localstorage maybe
  const [email,setEmail] = useState(''); 
  const [password,setPassword] = useState('');

  var derivedKey = pbkdf2.pbkdf2Sync(password, salt, 1000, 32, 'sha256');
  

  return (
    <main className="flex md:flex-row flex-col text-center bg-gradient-to-b from-amber-100 to-white dark:from-[#020024] dark:to-[#020024]">
      <div>
        <h1 style={{ fontSize: "25px", color: "maroon" }}>
          Verify your email to continue
        </h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <input
                style={{ width: "300px" }}
                type="text"
                placeholder="Enter your email"
              />
            </label>

            <label>
              <input
                style={{ width: "300px" }}
                type="number"
                placeholder="Enter the OTP"
              />
            </label>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button>Verify</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Verify;
