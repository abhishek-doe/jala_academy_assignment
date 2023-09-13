import React, { useState } from "react";
import "./Cssprop.css";
import { IoIosSpeedometer } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { alertData } from "../../constant";

const Cssprop = () => {
  const [cssState, setCssState] = useState(0);
  const [alert, setAlert] = useState(alertData);

  const handleCancel = (i) => {
    setAlert(alert.filter(item => alert.indexOf(item) !== i))    
  };

  return (
    <div className="cssprop">
      <div style={{ display: "flex" }}>
        <h3 style={{ flex: 1, fontWeight: "500" }}>CSS Properties</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <IoIosSpeedometer />
          <p style={{ fontWeight: "300", fontSize: ".8rem" }}>
            <Link to="/">Home</Link> &gt; Employee &gt; CSS Properties
          </p>
        </div>
      </div>
      <div>
        <div className="css-div">
          <div className="cssprop-head">
            <li className={cssState === 0 ? "tab-active" : "tab-li"} onClick={() => setCssState(0)}>
              Links
            </li>
            <li className={cssState === 1 ? "tab-active" : "tab-li"} onClick={() => setCssState(1)}>
              Labels
            </li>
            <li className={cssState === 2 ? "tab-active" : "tab-li"} onClick={() => setCssState(2)}>
              Buttons
            </li>
            <li className={cssState === 3 ? "tab-active" : "tab-li"} onClick={() => setCssState(3)}>
              Alerts
            </li>
            <li className={cssState === 4 ? "tab-active" : "tab-li"} onClick={() => setCssState(4)}>
              Progress Bars
            </li>
          </div>
          <div className="css-content">
            {cssState === 0 && (
              <div className="link-div">
                <a href="http://www.growictech.com/" target="_blank" rel="noreferrer" style={{ color: "red" }}>
                  Link 1
                </a>
                <a href="https://www.linkedin.com/uas/login" target="_blank" rel="noreferrer" style={{ color: "green" }}>
                  Link 2
                </a>
                <a href="https://www.google.co.in/" target="_blank" rel="noreferrer" style={{ color: "blue" }}>
                  Link 3
                </a>
                <a href="https://www.growictech.com:2096/" target="_blank" rel="noreferrer" style={{ color: "maroon" }}>
                  Link 4
                </a>
                <a href="http://www.restapitutorial.com/httpstatuscodes.html" target="_blank" rel="noreferrer" style={{ color: "voilet" }}>
                  Link 5
                </a>
              </div>
            )}
            {cssState === 1 && (
              <div className="label-div">
                <p className="label" style={{ background: "#d2d6de", color: "black" }}>
                  Default
                </p>
                <p className="label" style={{ background: "#3c8dbc" }}>
                  Primary
                </p>
                <p className="label" style={{ background: "#00a65a" }}>
                  Seccess
                </p>
                <p className="label" style={{ background: "#00c0ef" }}>
                  Info
                </p>
                <p className="label" style={{ background: "#f39c12" }}>
                  Warning
                </p>
                <p className="label" style={{ background: "#dd4b39" }}>
                  Danger
                </p>
              </div>
            )}
            {cssState === 2 && (
              <div className="button-div">
                <button className="button" style={{ background: "#d2d6de", color: "black" }}>
                  Default
                </button>
                <button className="button" style={{ background: "#3c8dbc" }}>
                  Primary
                </button>
                <button className="button" style={{ background: "#00a65a" }}>
                  Success
                </button>
                <button className="button" style={{ background: "#00c0ef" }}>
                  Info
                </button>
                <button className="button" style={{ background: "#f39c12" }}>
                  Warning
                </button>
                <button className="button" style={{ background: "#dd4b39" }}>
                  Danger
                </button>
              </div>
            )}
            {cssState === 3 &&
              alert.map((data, i) => {
                return (
                  <div key={i} style={{ background: data.color, display: "flex", alignItems: "center", padding: "10px 20px", margin: "10px", borderRadius: "10px" }}>
                    <p style={{ color: "white", flex: "1", fontSize: ".9rem" }}>{data.text}</p>
                    <FaTimes style={{ color: "white", cursor: "pointer" }} onClick={()  => handleCancel(i)} />
                  </div>
                );
              })}
              {cssState === 4 && (
                <div className="progress-div">
                    <progress value="35" max="100" className="green"/>
                    <progress value="67" max="100" className="blue"/>
                    <progress value="43" max="100" className="yellow"/>
                    <progress value="79" max="100" className="red"/>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cssprop;
