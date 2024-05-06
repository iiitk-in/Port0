//INCOMPLETE
//This page will be shown after OTP is verified and account is created
"use client"
import { useState } from "react";
const Page = () => {
  const [auth, setAuth] = useState(false);
  //maybe get auth status from status code returned from the post made after OTP
  if (auth) {
    return (
      <div>
        <h1>Authenticated! and account created</h1>
        {/* redirect to account homepage */}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Problem in creating account! Try again</h1>
        {/* redirect to /register */}
      </div>
    );
  }
};
export default Page;