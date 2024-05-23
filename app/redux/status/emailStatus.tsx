import { useSelector } from "react-redux";
import {RootState}  from "../store";

const EmailStatus = (): string => {
  const email = useSelector((state: RootState) => state.email.email);
  return email;
};

export default EmailStatus;
