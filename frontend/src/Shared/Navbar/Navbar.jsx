import React from "react";
import WebLogo from "../../assets/JobsownLogo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
function Navbar() {
  return (
    <div className="tracking-wide ">
      <div className="NavBox">
        <Link to={"/view-profile"}>
          <div className="NavLogo">
            <img
              src={WebLogo}
              alt="WebLogo"
              className="NavLogoImg lg:w-full w-24  "
            />
          </div>
        </Link>
        <div className="NavLogin flex items-center hover:underline cursor-pointer gap-4 lg:gap-20">
          <div className="flex items-center lg:gap-3 gap-1">
            <IoCallOutline className="text-black lg:text-2xl text-lg" />
            <a href="tel:" className="text-black font-medium ">
              +91 97739 35021
            </a>
          </div>
          <Link to={"/login"}>
            <button type="submit" className="NavLoginBtn">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
