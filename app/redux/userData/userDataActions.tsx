import { UPDATE_DATA } from "./userDataTypes";

export const updateData = (data: object) => {
  return {
    type: UPDATE_DATA,
    payload: data,
  };
};
