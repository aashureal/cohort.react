import React, { useEffect } from "react";
import { getUsers } from "../store/userAction";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const users = useSelector((state) => state.users.value);
  console.log(users);

  return <div className=""></div>;
};

export default Home;
