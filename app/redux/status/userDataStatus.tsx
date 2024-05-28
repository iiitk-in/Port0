import { useSelector } from "react-redux";
import { RootState } from "../store";

const UserDataStatus = (): object => {
    const data = useSelector((state: RootState) => state.userData);
    return data;
  };
  
  export default UserDataStatus;
  