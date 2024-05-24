import { useSelector } from "react-redux";
import { RootState } from "../store";

const FormDataStatus = (): object => {
    const data = useSelector((state: RootState) => state.formData);
    return data;
  };
  
  export default FormDataStatus;
  