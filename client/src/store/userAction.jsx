import axios from "../api/axios";
import { loadUsers } from "./userSlice";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/users");
    dispatch(loadUsers(data));
  } catch (error) {
    console.log(error);
  }
};
