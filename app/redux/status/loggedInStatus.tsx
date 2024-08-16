import { useSelector } from "react-redux";
import { RootState } from "../store";
const LoggedInStatus = (): boolean => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.isLoggedIn.isLoggedIn
  );
  return isLoggedIn;
};

export default LoggedInStatus;
