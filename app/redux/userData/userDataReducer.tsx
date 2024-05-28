import { UPDATE_DATA } from "./userDataTypes";

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

const userDataReducer = (
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

export default userDataReducer;
