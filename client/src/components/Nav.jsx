import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="py-5 flex items-center justify-center gap-5 text-xl ">
      <Link to={"/"} className="hover:scale-[1.07]">
        Home
      </Link>
      <Link to={"/about"} className="hover:scale-[1.07]">
        About
      </Link>
      <Link to={"/products"} className="hover:scale-[1.07]">
        Products
      </Link>
      <Link to={"/products/lala"} className="hover:scale-[1.07]">
        Product - Lala
      </Link>
      <Link to={"/login"} className="hover:scale-[1.07]">
        Login
      </Link>
      <Link to={"/register"} className="hover:scale-[1.07]">
       Register
      </Link>
    </nav>
  );
};

export default Nav;
