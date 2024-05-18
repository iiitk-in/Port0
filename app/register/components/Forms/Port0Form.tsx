import {useSelector} from "react-redux";
import {RootState} from "@/app/redux/store";
import Link from "next/link";

type Port0FormProps = {
  port0Username: string;
  port0Password: string;
  updateFields: (fields: Partial<Port0FormProps>) => void;
};
const Port0Form = ({
  port0Username,
  port0Password,
  updateFields,
}: Port0FormProps) => {
    const dark = useSelector((state: RootState) => state.darkMode);
    function showPassword(){
        var x: any = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
  return (
    <div>
      <p className={dark?"text-white text-2xl text-center mb-5":"text-2xl text-center mb-5"}><span className="port0"> Port0 </span> Credentials</p>
      <div className="text-20 flex flex-col sm:flex-col  lg:flex-row lg:items-start">
        <input
          type="text"
          
          autoFocus
          value={port0Username}
          onChange={(e) => updateFields({ port0Username: e.target.value })}
          placeholder="Port0 Username"
          className={
            dark
              ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg lg:mr-10"
              : "p-2 rounded-lg lg:mr-10 flex justify-center"
          }
        />
        <div className="flex flex-col">
        <input
          type="password"
          id="password"
          
          value={port0Password}
          onChange={(e) => updateFields({ port0Password: e.target.value })}
          placeholder="Port0 Password"
          className={
            dark
              ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg"
              : "p-2 rounded-lg"
          }
        />
        <span className="flex justify-end">
        <label className={dark?"text-white":"text-black"}>Show Password</label>
        <input type="checkbox" name="password-box" onClick={showPassword}/>
        </span>
        </div>
      </div>
      
    </div>
  );
};

export default Port0Form;
