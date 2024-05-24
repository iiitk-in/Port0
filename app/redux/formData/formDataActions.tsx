import { UPDATE_DATA } from "./formDataTypes";

export const updateData = (data: object) => {
  return {
    type: UPDATE_DATA,
    payload: data,
  };
};
