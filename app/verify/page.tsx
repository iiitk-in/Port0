"use client";
import react from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Verify = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        //will do this later
        //post to /auth/verify with the OTP and the email 
        //response will be a jwt token
        //then perform the hashing for /auth/create
    };
  return (
    <main className="flex md:flex-row flex-col text-center bg-gradient-to-b from-amber-100 to-white dark:from-[#020024] dark:to-[#020024]">
      <div>
        <h1  style={{ fontSize: "25px", color:'maroon' }}>Verify your email to continue</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
          <label>
              <input
              style={{width:'300px'}}
                type="text"
                placeholder="Enter your email"
              />
            </label>

            <label>
              <input
              style={{width:'300px'}}
                type="number"
                placeholder="Enter the OTP"
              />
            </label>
          </div>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <button>Verify</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Verify;
