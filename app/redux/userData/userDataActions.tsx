import { UPDATE_USER_DATA } from "./userDataTypes";

export const updateUserData = (data: object) => {
  return {
    type: UPDATE_USER_DATA,
    payload: data,
  };
};
