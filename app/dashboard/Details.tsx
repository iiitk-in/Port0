import DarkModeStatus from "../redux/status/darkModeStatus";
import UserDataStatus from "../redux/status/userDataStatus";
import DetailComponent from "./DetailComponent";

const Details = () => {
  const dark = DarkModeStatus();
  const vault: any = UserDataStatus();
  const userDetails = vault.UserData.FormData;
  const detailArray = [
    "Name",
    "Batch",
    "Year",
    "Course",
    "Roll No",
    "Username",
    "Email",
    "Phone",
    "Personal Email",
    "State",
  ];
  const detailValue = [
    `${userDetails.firstName} ${userDetails.lastName}`,
    userDetails.batch,
    userDetails.year,
    userDetails.course,
    userDetails.rollNumber,
    userDetails.port0Username,
    userDetails.collegeEmail,
    userDetails.phone,
    userDetails.personalEmail,
    userDetails.state,
  ];

  return (
    <div>
      <div className="flex ">
        <div className="flex flex-col justify-center align-center">
          <h1
            className={
              dark ? "text-3xl my-5 ml-5" : "text-3xl my-5 ml-5 text-red-900"
            }
          >
            Your Details
          </h1>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 ">
            {detailArray.map((detail, index) => (
              <DetailComponent
                key={index}
                detail={detail}
                value={detailValue[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
