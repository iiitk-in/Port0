import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Link from "next/link";

type PersonalFormProps = {
  personalEmail: string;
  firstName: string;
  lastName: string;
  state: string;
  phone: string;
  updateFields: (fields: Partial<PersonalFormProps>) => void;
};

const PersonalForm = ({
  personalEmail,
  firstName,
  lastName,
  state,
  phone,
  updateFields,
}: PersonalFormProps) => {
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
        Personal Credentials
      </p>
      <div className="text-20 flex flex-col sm:flex-col items-center lg:flex-row">
        <div className="flex flex-col">
          <input
            type="text"
            autoFocus
            value={firstName}
            onChange={(e) => updateFields({ firstName: e.target.value })}
            placeholder="First Name"
            className={
              dark
                ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg"
                : "p-2 rounded-lg hover:border-red-800"
            }
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => updateFields({ lastName: e.target.value })}
            placeholder="Last Name"
            className={
              dark
                ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg"
                : "p-2 rounded-lg hover:border-red-800"
            }
          />
          <input
            type="text"
            value={personalEmail}
            onChange={(e) => updateFields({ personalEmail: e.target.value })}
            placeholder="Personal Email"
            className={
              dark
                ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg"
                : "p-2 rounded-lg hover:border-red-800"
            }
          />
        </div>
        <div className="flex flex-col lg:ml-10">
          <input
            type="text"
            value={phone}
            onChange={(e) => updateFields({ phone: e.target.value })}
            placeholder="Phone"
            className={
              dark
                ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg"
                : "p-2 rounded-lg hover:border-red-800"
            }
          />
          <input
            type="text"
            value={state}
            onChange={(e) => updateFields({ state: e.target.value })}
            placeholder="State"
            className={
              dark
                ? "text-white bg-slate-800 border-gray-600 p-2 rounded-lg"
                : "p-2 rounded-lg hover:border-red-800"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalForm;
