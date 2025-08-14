import { api } from "../../api/axios";

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await api.post("/users", user);
    dispatch()
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
