import DarkModeStatus from "../redux/status/darkModeStatus";
import DetailComponent from "./DetailComponent";

const Details = () => {
  const dark = DarkModeStatus();
  const detailArray = [
    "Name",
    "Age",
    "Batch",
    "Course",
    "Roll No",
    "Username",
    "Email",
  ];
  const detailValue = [
    "John Doe",
    "18",
    "2023",
    "CSE Core",
    "2023 BCX 1234",
    "JohnDoe",
    "john23bcx1234@ iiitkottayam.ac.in",
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
