import DarkModeStatus from "../redux/status/darkModeStatus";

const DetailComponent = (props: any) => {
  const { detail, value } = props;
  const dark = DarkModeStatus();
  return (
    <div>
      <div
        className={
          dark
            ? "flex flex-col my-2 mx-5 border-2 border-slate-600 rounded-xl sm:py-10 pr-5 pl-3 sm:pl-10 py-5"
            : "flex flex-col my-2 mx-5 border-2 border-red-900 rounded-xl sm:py-10 pr-5 pl-3 sm:pl-10 py-5"
        }
      >
        <p
          className={
            dark
              ? "sm:text-3xl text-xl font-bold"
              : "sm:text-3xl text-xl text-red-900 font-bold"
          }
        >
          {detail}:
        </p>
        <p className="sm:text-2xl text-xl text-brown-700 break-words">
          {value}
        </p>
      </div>
    </div>
  );
};

export default DetailComponent;
