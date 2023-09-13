import React from "react";
import "./Navbar.css";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

const Navbar = ({ width, sidebarFunc, isSidebar }) => {
  return (
    <div className="navbar">
      <div className="heading-div">
        <h3 className="heading">Magnus</h3>
      </div>
      <div className="logout-div">
        {width && (
          <div className="menu-icon" onClick={sidebarFunc}>
            {isSidebar ? <AiOutlineAlignLeft /> : <FaTimes />}
          </div>
        )}
        <div className="logout">
          <FiLogOut />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
