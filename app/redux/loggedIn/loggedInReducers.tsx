import { CHANGE_LOG_STATUS } from "./loggedInTypes";

export const updateData = (data: object) => {
  return {
    type: CHANGE_LOG_STATUS,
  };
};
