import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex align-items-center justify-content-between px-6 py-3"
         style={{ background: "#0b3d63" }}>
      <h2 className="text-white m-0">OnePrint</h2>

      <div className="flex gap-4">
        <a href="#" className="text-white no-underline">About</a>
        <a href="#" className="text-white no-underline">Contact Us</a>
      </div>
    </nav>
  );
};


export default Navbar;
