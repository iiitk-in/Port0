"use client";
import { useState } from "react"; 
import React from "react";

export default function Registration() {

  const [password, setPassword] = useState("");
  const [boxcolor,setBoxcolor] = useState("");
  const [visible, setVisible] = useState("block");
  const [strength, setStrength] = useState("Weak");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setVisible("block");
    if(password.length < 5) {
      setBoxcolor("red");
      setStrength("Weak");
    }
    else if(password.length < 9) {
      setBoxcolor("#CC7722");
      setStrength("Medium");
    }
    else {
      setBoxcolor("green");
      setStrength("Strong");
    }
  }

  const handleSubmit = () => {
    //will do this later
  };

  return (
    <main className="flex flex-col text-sm md:text-base md:flex-row md:items-center h-screen p-4 md:p-10 justify-evenly">
      {" "}
      <div className="heading">
        <h1 className="text-3xl flex-auto text-center p-3">
          Register for the <span className="port0">Port0</span> Authentication
          Service
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="text-xl flex flex-col sm:flex-col lg:flex-row items-center bg-gradient-to-b from-beige to-white">
          <div className="page1">
            <div>
              <label>
                Name: <br />
                <input type="text" name="name" />
              </label>
            </div>
            <div>
              <label>
                Roll Number: <br />
                <input type="text" name="roll" />
              </label>
            </div>
            <div>
              <label>
                Email: <br />
                <input type="email" name="email" />
              </label>
            </div>

              <div>
                <label>
                  Password: <br />
                  <input type="password" name="password" value={password} onChange={handlePasswordChange} style={{borderColor: boxcolor}} />
                  <div className="ml-10 mb-0">
                    <p className="text-md" style={{display: visible}}>Password Strength: <span style={{color:boxcolor}}>{strength}</span></p>
                  </div>
                </label>
              </div>
            </div>
          <div className="page2">
            <div>
              <label>
                Batch: <br />
                <select name="batch" className="">
                  <option value="batch1">Batch 1</option>
                  <option value="batch2">Batch 2</option>
                  <option value="batch3">Batch 3</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Year: <br />
                <select name="year" className="">
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2023">2024</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <button>Register</button>
          <footer className="text-sm">
            <p>
              Already have an account? <a href="/login">Login</a>
            </p>
          </footer>
        </div>
      </form>
    </main>
  );
}
