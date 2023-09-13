import React, { useState } from "react";
import "./Links.css";
import { IoIosSpeedometer } from "react-icons/io";
import { Link } from "react-router-dom";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import x from "../../assets/x.png";

const Links = () => {
  const [link, setLink] = useState(0);

  return (
    <div className="link">
      <div style={{ display: "flex" }}>
        <h3 style={{ flex: 1, fontWeight: "500" }}>Links</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <IoIosSpeedometer />
          <p style={{ fontWeight: "300", fontSize: ".8rem" }}>
            <Link to="/">Home</Link> &gt; Employee &gt; Links
          </p>
        </div>
      </div>
      <div>
        <div className="link-head">
          <li className={link === 0 ? "tab-active" : "tab-li"} onClick={() => setLink(0)}>
            Working Links
          </li>
          <li className={link === 1 ? "tab-active" : "tab-li"} onClick={() => setLink(1)}>
            Broken Links
          </li>
          <li className={link === 2 ? "tab-active" : "tab-li"} onClick={() => setLink(2)}>
            Image Links
          </li>
          <li className={link === 3 ? "tab-active" : "tab-li"} onClick={() => setLink(3)}>
            Status Codes
          </li>
        </div>
        <div className="link-content">
          {link === 0 && (
            <div>
              <a target="_blank" rel="noreferrer" href="http://www.workinglinks.co.uk/" style={{ color: "red" }}>
                Link 1
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.google.co.in/" style={{ color: "green" }}>
                Link 2
              </a>
              <a target="_blank" rel="noreferrer" href="http://jalatechnologies.com/" style={{ color: "blue" }}>
                Link 3
              </a>
            </div>
          )}
          {link === 1 && (
            <div>
              <a target="_blank" rel="noreferrer" href="https://magnus.jalatechnologies.com/Home/www.brokenlinkcheck.com/" style={{ color: "#1d7015" }}>
                Link 1
              </a>
              <a target="_blank" rel="noreferrer" href="https://magnus.jalatechnologies.com/Home/www.brokenlinkcheck.com/" style={{ color: "#3c8db" }}>
                Link 2
              </a>
              <a target="_blank" rel="noreferrer" href="https://magnus.jalatechnologies.com/Home/www.brokenlinkcheck.com/" style={{ color: "#00376e" }}>
                Link 3
              </a>
            </div>
          )}
          {link === 2 && (
            <div>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/">
                <img src={facebook} alt="facebook" height="100"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/uas/login">
                <img src={linkedin} alt="linkedin" height="100"/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://x.com/">
                <img src={x} alt="x" height="100"/>
              </a>
            </div>
          )}
          {link === 3 && (
            <div>
              <a target="_blank" rel="noreferrer" href="http://www.workinglinks.co.uk/" style={{ color: "maroon" }}>
                200
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.google.co.in/" style={{ color: "blue" }}>
                301
              </a>
              <a target="_blank" rel="noreferrer" href="http://jalatechnologies.com/" style={{ color: "green" }}>
                404
              </a>
              <a target="_blank" rel="noreferrer" href="http://jalatechnologies.com/" style={{ color: "red" }}>
                500
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Links;
