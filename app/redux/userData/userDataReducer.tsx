import { UPDATE_USER_DATA } from "./userDataTypes";

const initialState = {
  UserData: {
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
    case UPDATE_USER_DATA:
      return {
        ...state,
        UserData: action.payload,
      };
    default:
      return state;
  }
};

export default userDataReducer;
