import { useSelector } from "react-redux";
import { RootState } from "../store";
const DarkModeStatus = (): boolean => {
  const dark = useSelector((state: RootState) => state.darkMode.darkMode);
  return dark;
};
export default DarkModeStatus;
