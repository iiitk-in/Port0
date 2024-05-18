import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Link from "next/link";
type CollegeFormProps = {
  course: string;
  year: string;
  rollNumber: string;
  collegeEmail: string;
  lmsPassword: string;
  batch: string;
  updateFields: (fields: Partial<CollegeFormProps>) => void;
};
const CollegeForm = ({
  course,
  year,
  rollNumber,
  collegeEmail,
  lmsPassword,
  batch,
  updateFields,
}: CollegeFormProps) => {
  const dark = useSelector((state: RootState) => state.darkMode);
  return (
    <div>
      <p
        className={
          dark
            ? "text-white text-2xl text-center mb-5"
            : "text-2xl text-center mb-5"
        }
      >
        College Credentials
      </p>
      <div className="text-20 flex flex-col sm:flex-col items-center lg:flex-row">
        <div>
          <select
            name="course"
            onChange={(e) => updateFields({ course: e.target.value })}
            value={course}
            className={
              dark
                ? "text-white bg-slate-800 my-2 border-gray-600 p-2 rounded-lg flex flex-row items-center w-24 hover:border-white-600 mb-5"
                : "p-2 rounded-lg my-2  flex flex-row items-center bg-white hover:border-gray-600 mb-5"
            }
            style={{ width: "100%" }}
          >
            <option value="cse-core">CSE Core</option>
            <option value="cse-cyber">CSE Cyber</option>
            <option value="cse-ai">CSE AI</option>
            <option value="ece">ECE</option>
          </select>

          <div style={{ width: "100%" }}>
            <select
              name="year"
              onChange={(e) => updateFields({ year: e.target.value })}
              value={year}
              className={
                dark
                  ? "text-white bg-slate-800 my-2 border-gray-600 p-2 rounded-lg flex flex-row items-center w-24 hover:border-white-600"
                  : "p-2 rounded-lg my-2  flex flex-row items-center bg-white hover:border-gray-600"
              }
              style={{ width: "100%" }}
            >
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2023">2024</option>
            </select>
          </div>
          <input
            type="text"
            value={rollNumber}
            onChange={(e) => updateFields({ rollNumber: e.target.value })}
            placeholder="Roll Number"
            className={
              dark
                ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg"
                : "p-2 rounded-lg"
            }
          />
        </div>
        <div className="flex flex-col mx-10">
          <select
            name="batch"
            value={batch}
            onChange={(e) => updateFields({ batch: e.target.value })}
            className={
              dark
                ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg mt-5 mb-2 hover:border-white-600"
                : "bg-white p-2 rounded-lg mt-5 hover:border-gray-600 mb-2"
            }
          >
            <option value="batch1">Batch 1</option>
            <option value="batch2">Batch 2</option>
            <option value="batch3">Batch 3</option>
          </select>

          <input
            type="text"
            value={collegeEmail}
            onChange={(e) => updateFields({ collegeEmail: e.target.value })}
            placeholder="College Email"
            className={
              dark
                ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg"
                : "p-2 rounded-lg"
            }
          />
          <input
            type="text"
            value={lmsPassword}
            onChange={(e) => updateFields({ lmsPassword: e.target.value })}
            placeholder="LMS Password"
            className={
              dark
                ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg"
                : "p-2 rounded-lg"
            }
          />
        </div>
      </div>
      <footer className="text-sm p-2 text-center">
        <p>
          Already have an account?{" "}
          <Link
            className={dark ? "text-white underline" : "underline"}
            href="/login"
          >
            {" "}
            Login
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default CollegeForm;
