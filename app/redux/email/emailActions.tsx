import { CHANGE_EMAIL } from "./emailTypes";

export const changeEmail = (email: string) => {
  return {
    type: CHANGE_EMAIL,
    payload: email,
  };
};
