import React from "react";
import Nav from "../components/Nav";

import { useForm } from "react-hook-form";
const Register = () => {
  const { register, reset, handleSubmit } = useForm();

  return (
    <div className="p-5">
      <Nav />
      <h1 className="text-2xl">Register</h1>

      <form className="my-10">
        <input type="text" placeholder="Enter Username" className="" />
      </form>
    </div>
  );
};

export default Register;
