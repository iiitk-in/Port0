import DarkModeButton from "./DarkModeButton";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex w-screen">
      <div className=" ml-3 md:ml-5 mb-auto mt-auto">
        <Link
          href="/"
          className="dark:text-white text-maroon dark:bg-slate-800 border border-red-900 dark:border-gray-600 p-2 rounded-lg mr-3 md:mr-5"
        >
          Home
        </Link>
        <Link
          href="https://blog.iiitk.in"
          className="dark:text-white text-maroon dark:bg-slate-800 border border-red-900 dark:border-gray-600 p-2 rounded-lg mr-3 md:mr-5"
        >
          Blog
        </Link>
        <Link
          href="https://docs.iiitk.in"
          className="dark:text-white text-maroon dark:bg-slate-800 border border-red-900 dark:border-gray-600 p-2 rounded-lg mr-3 md:mr-5"
        >
          Docs
        </Link>
      </div>
      <div className="m-5 ml-auto size-10 flex align-center justify-center">
        <DarkModeButton />
      </div>
    </div>
  );
};

export default NavBar;
