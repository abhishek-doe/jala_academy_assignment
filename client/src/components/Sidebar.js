import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { FaUserCircle, FaSearch, FaRegHandPointRight } from "react-icons/fa";
import { IoIosSpeedometer, IoIosArrowBack, IoIosCreate } from "react-icons/io";
import { AiFillSmile } from "react-icons/ai";
import { HiUserGroup } from "react-icons/hi";
import { CgDetailsMore } from "react-icons/cg";
import { MdSettings } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [accorcontent, setAccorcontent] = useState(13);

  const navigate = useNavigate();
  const location = useLocation();
  let paths = ["/multitabs", "/menu", "/autocomplete", "/collapse", "/images", "/slider", "/tooltips", "/popups", "/links", "/cssprop", "/frames"];

  return (
    <div className="sidebar">
      <div className="profile">
        <FaUserCircle style={{ fontSize: "3rem" }} />
        <div>
          <p>Guest User</p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <AiFillSmile />
            &nbsp;<p>User</p>
          </div>
        </div>
      </div>
      <div>
        <div
          onClick={() => {
            setSelected(0);
            navigate("/");
          }}
          className={location.pathname === "/" ? "menus-active" : "menus"}
        >
          <IoIosSpeedometer className="menu-icon" />
          <p className="menu-text">Home</p>
        </div>
        <div onClick={() => setSelected(1)} className={location.pathname === "/create" || location.pathname === "/search" ? "menus-active" : "menus"}>
          <HiUserGroup className="menu-icon" />
          <p className="menu-text">Employee</p>
          <IoIosArrowBack className={selected === 1 && "arrow"} />
        </div>
        <div className={selected === 1 ? "accor-content-show" : "accor-content"}>
          <div
            className={location.pathname === "/create" ? "employ-accor-active" : "employ-accor"}
            onClick={() => {
              setAccorcontent(0);
              navigate("create");
            }}
          >
            <IoIosCreate />
            <p>Create</p>
          </div>
          <div
            className={location.pathname === "/search" ? "employ-accor-active" : "employ-accor"}
            onClick={() => {
              setAccorcontent(1);
              navigate("/search");
            }}
          >
            <FaSearch />
            <p>Search</p>
          </div>
        </div>

        <div onClick={() => setSelected(2)} className={paths.includes(location.pathname) ? "menus-active" : "menus"}>
          <CgDetailsMore className="menu-icon" />
          <p className="menu-text">More</p>
          <IoIosArrowBack className={selected === 2 && "arrow"} />
        </div>
        <div className={selected === 2 ? "accor-content-show" : "accor-content"}>
          {moreData.map((name, i) => {
            return (
              <Link to={name.click} key={i} onClick={() => setAccorcontent(i + 2)}>
                <div className={location.pathname === name.click ? "employ-accor-active" : "employ-accor"}>
                  <FaRegHandPointRight />
                  <p>{name.name}</p>
                </div>
              </Link>
            );
          })}
        </div>
        <Link to="/settings">
          <div onClick={() => setSelected(3)} className={location.pathname === "/settings" ? "menus-active" : "menus"}>
            <MdSettings className="menu-icon" />
            <p className="menu-text">Settings</p>
            <IoIosArrowBack className={selected === 3 && "arrow"} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

const moreData = [
  {
    name: "Multiple Tabs",
    click: "/multitabs",
  },
  {
    name: "Menu",
    click: "/menu",
  },
  {
    name: "Autocomplete",
    click: "/autocomplete",
  },
  {
    name: "Collapse Content",
    click: "/collapse",
  },
  {
    name: "Images",
    click: "/images",
  },
  {
    name: "Slider",
    click: "/slider",
  },
  {
    name: "Tooltips",
    click: "/tooltips",
  },
  {
    name: "Popups",
    click: "/popups",
  },
  {
    name: "Links",
    click: "/links",
  },
  {
    name: "CSS Properties",
    click: "/cssprop",
  },
  {
    name: "iFrames",
    click: "/frames",
  },
];

