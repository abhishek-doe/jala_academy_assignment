import React, { useState } from 'react'
import { IoIosSpeedometer } from "react-icons/io";
import { Link } from "react-router-dom";

const Slider = () => {
    const [range, setRange] = useState(0)

    const styles = {
        borderTop: "5px solid #3c8dbc",
        borderLeft: "1px solid #eee",
        borderRight: "1px solid #eee",
        padding: "11px 10px",
        cursor: "pointer",
        backgroundColor: "white",
        fontSize: ".8rem",
    }
    return (
        <div style={{ padding: "15px" }}>
            <div style={{ display: "flex" }}>
                <h3 style={{ flex: 1, fontWeight: "500" }}>Slider</h3>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <IoIosSpeedometer />
                    <p style={{ fontWeight: "300", fontSize: ".8rem" }}>
                        <Link to="/">Home</Link> &gt; Employee &gt; Slider
                    </p>
                </div>
            </div>
            <div style={{background: "white", margin: "35px"}}>
                <div style={{ display: "flex", border: "1px solid #d4d4d4", background: "white" }}>
                    <div style={styles}>
                        Slider
                    </div>
                </div>
                <input type="range" className='inp-range' style={{margin: " 20px 40px", width: "88%"}} value={range} onChange={e => setRange(e.target.value)}/>
                <p style={{padding :"5px 0", fontSize: ".8rem", textAlign: "center"}}>Range: <strong>{range}</strong></p>
            </div>
        </div>
    )
}

export default Slider
