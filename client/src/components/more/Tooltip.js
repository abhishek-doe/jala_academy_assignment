import React, { useState } from 'react'
import { IoIosSpeedometer } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Tooltip.css"

const Tooltip = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [isCLicked, setIsClicked] = useState(false)

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };
    return (
        <div style={{ padding: "15px" }}>
            <div style={{ display: "flex" }}>
                <h3 style={{ flex: 1, fontWeight: "500" }}>Tooltips</h3>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <IoIosSpeedometer />
                    <p style={{ fontWeight: "300", fontSize: ".8rem" }}>
                        <Link to="/">Home</Link> &gt; Employee &gt; Tooltips
                    </p>
                </div>
            </div>
            <div style={{ background: "white", margin: "35px" }}>
                <div style={{ display: "flex", border: "1px solid #d4d4d4", background: "white" }}>
                    <div className='tool-head'>
                        Slider
                    </div>
                </div>
                <div className='tool-div'>
                    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="tooltip-container">
                        <button onClick={() => setIsClicked(true)}  >Check the Tooltip before you click</button>
                        {showTooltip && <div className="tooltip">{isCLicked ? "You clicked" : "You have not CLICKED this button yet. Please ckick me"}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tooltip
