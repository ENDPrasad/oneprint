import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex align-items-center justify-content-between px-6 py-3"
         style={{ background: "#0A2540" }}>
      <h1 className="text-white m-0 text-lg md:text-xl lg:text-3xl cursor-pointer" onClick={() => navigate("/")}>OnePrint</h1>

      <div className="flex gap-4 md:text-xl lg:text-xl">
        <a href="#about" className="text-white no-underline text-base">About</a>
        <a href="#contact-us" className="text-white no-underline text-base">Contact Us</a>
      </div>
    </nav>
  );
};


export default Navbar;
