import React, { useState } from "react";
import "./Collapse.css";
import { IoIosSpeedometer } from "react-icons/io";
import { collapseData } from "../../constant";
import { Link } from "react-router-dom";

const Collapse = () => {
    const [singleDrop, setSingleDrop] = useState(null);
    const [multipleDrop, setMultipleDrop] = useState([]);
    const [isSingle, setIsSingle] = useState(true);

    const handleSingleDrop = (i) => {
        if (singleDrop === i) {
            return setSingleDrop(null);
        }
        setSingleDrop(i);
    };
    const handleMultipleDrop = (i) => {
        if (multipleDrop.includes(i)) {
            setMultipleDrop(multipleDrop.filter((item) => item !== i));
        } else {
            setMultipleDrop([...multipleDrop, i]);
        }
    };


    return (
        <div className="collapse">
            <div style={{ display: "flex" }}>
                <h3 style={{ flex: 1, fontWeight: "500" }}>Collapse Content</h3>
                <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <IoIosSpeedometer />
                    <p style={{ fontWeight: "300", fontSize: ".8rem" }}>
                        <Link to="/">Home</Link> &gt; Employee &gt; Collapse
                    </p>
                </div>
            </div>
            <div className="menu-div">
                <div className="menu-head">
                    <li className={isSingle ? "tab-active" : "tab-li"} onClick={() => setIsSingle((x) => !x)}>
                        Single Drop
                    </li>
                    <li className={!isSingle ? "tab-active" : "tab-li"} onClick={() => setIsSingle((x) => !x)}>
                        Multiple Drop
                    </li>
                </div>
                <div className="menu-content">
                    {isSingle && <div>
                        {collapseData.map((data, i) => {
                            return (
                                <div key={i}>
                                    <div onClick={() => handleSingleDrop(i)} className="col-head">
                                        <div style={{ flex: "1" }}>
                                            <h4>{data.head}</h4>
                                        </div>
                                        <h2>{singleDrop === i ? "-" : "+"}</h2>
                                    </div>
                                    <div className={singleDrop === i ? "positionDrop-show" : "positionDrop"}>
                                        <p>{data.content}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>}
                    {!isSingle && (
                        <div>
                            {collapseData.map((data, i) => {
                            return (
                                <div key={i}>
                                    <div onClick={() => handleMultipleDrop(i)} className="col-head">
                                        <div style={{ flex: "1" }}>
                                            <h4>{data.head}</h4>
                                        </div>
                                        <h2>{multipleDrop.includes(i) ? "-" : "+"}</h2>
                                    </div>
                                    <div className={multipleDrop.includes(i) ? "positionDrop-show" : "positionDrop"}>
                                        <p>{data.content}</p>
                                    </div>
                                </div>
                            );
                        })}
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Collapse;
