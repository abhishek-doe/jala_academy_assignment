import React, { useState } from "react";
import { IoIosSpeedometer } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Popup.css";

const Popup = () => {
  const [promt, setPromt] = useState("");
  const [modal, setModal] = useState();

    
  const handleButtonClick = () => {
    setPromt(prompt("Enter your Name:"));
  };

  return (
    <div style={{ padding: "15px" }} className="popup">
      <div style={{ display: "flex" }}>
        <h3 style={{ flex: 1, fontWeight: "500" }}>Popups</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <IoIosSpeedometer />
          <p style={{ fontWeight: "300", fontSize: ".8rem" }}>
            <Link to="/">Home</Link> &gt; Employee &gt; Popups
          </p>
        </div>
      </div>
      <div style={{ background: "white", margin: "15px", width: "35rem" }}>
        <div style={{ display: "flex", border: "1px solid #d4d4d4", background: "white" }}>
          <div className="popup-head">Popups</div>
        </div>
        <ul className="ul-div">
          <li onClick={() => window.open("https://github.com/yaduvanshiay", "Popup Window", "width=500,height=500")}>Popup One</li>
          <li onClick={() => window.open("https://www.linkedin.com/in/abhishek-yadav-508089252/", "Popup Window", "width=700,height=700")}>Popup Two</li>
          <li onClick={() => window.open("https://www.google.com", "Popup Window", "width=500,height=400")}>Popup Three</li>
          <li onClick={() => window.open(window.location.href, "Popup Window", "width=500,height=400")}>Popup Duplicate</li>
          <li onClick={() => window.open(window.location.href, "_blank")}>Duplicate Tab</li>
          <li onClick={() => setModal(true)}>In window Popup</li>
          {modal && (
            <div className="modal">
              <div className="overlay"></div>
              <div className="modal-content">
                <div className="heading-div">
                  <h2 style={{ fontWeight: "400", flex: "1" }}>Popup One</h2>
                  <FaTimes style={{ fontSize: "1.4rem", cursor: "pointer", border: "3px solid white", borderRadius: "5px" }} onClick={() => setModal(false)} />
                </div>
                <hr />
                <div style={{fontSize: "1.3rem", padding: "20px"}}>
                  <p>
                    Popup One body.. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
                    at eros.
                  </p>
                </div>
                <hr />
                <button onClick={() => setModal(false)} className="close-btn">CLose</button>
              </div>
            </div>
          )}
          <li onClick={() => alert("This is an alert box")}>Alert Box</li>
          <li onClick={() => alert("Confirm Message box")}>Confirm Box</li>
          <li onClick={handleButtonClick}>Prompt Box</li>
        </ul>
        <p style={{ textAlign: "center", color: "#3d7e0f" }}>{promt}</p>
      </div>
    </div>
  );
};

export default Popup;
