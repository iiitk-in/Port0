import { UPDATE_DATA } from "./formDataTypes";

const initialState = {
  FormData: {
    course: "",
    year: "",
    rollNumber: "",
    collegeEmail: "",
    lmsPassword: "",
    batch: "",
    firstName: "",
    lastName: "",
    personalEmail: "",
    phone: "",
    state: "",
    port0Username: "",
    port0Password: "",
  },
};

const formDataReducer = (
  state = initialState,
  action: {
    payload: any;
    type: any;
  }
) => {
  switch (action.type) {
    case UPDATE_DATA:
      return {
        ...state,
        FormData: action.payload,
      };
    default:
      return state;
  }
};

export default formDataReducer;
