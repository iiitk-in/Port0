import { API_URL } from "../URL";
import axios from "axios";
async function tokenHandler(payload: object) {
  const url = API_URL;
  try {
    await axios.post(`${url}/auth/issueToken`, payload).then((res) => {
      return res.data.token;
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

async function createHandler(payload: object) {
  const url = API_URL;
  try {
    await axios.post(`${url}/auth/create`, payload).then((res) => {
      return res.status;
    });
  } catch (error) {
    return error;
  }
}

async function loginHandler(payload: object) {
  const url = API_URL;
  try {
    await axios.post(`${url}/auth/login`, payload).then((res) => {
      return res.status;
    });
  } catch (error) {
    return error.response.status;
  }
}
module.exports = { tokenHandler, createHandler, loginHandler };
