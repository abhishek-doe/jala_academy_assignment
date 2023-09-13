import React, { useState } from "react";
import { IoIosSpeedometer } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Auto.css";
import Select from "react-select";

function Auto() {
  const [autoState, setAutoState] = useState(0);

  const [selectedOption, setSelectedOption] = useState("");
  const [multiOption, setMultiOption] = useState("");


  return (
    <div className="auto">
      <div style={{ display: "flex" }}>
        <h3 style={{ flex: 1, fontWeight: "500" }}>Auto Complete</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <IoIosSpeedometer />
          <p style={{ fontWeight: "300", fontSize: ".8rem" }}>
            <Link to="/">Home</Link> &gt; Employee &gt; Auto Complete
          </p>
        </div>
      </div>
      <div className="auto-content">
        <div className="auto-head">
          <li className={autoState === 0 ? "tab-active" : "tab-li"} onClick={() => setAutoState(0)}>
            Single Values
          </li>
          <li className={autoState === 1 ? "tab-active" : "tab-li"} onClick={() => setAutoState(1)}>
            Multiple Values
          </li>
        </div>
        <div className="auto-body">
          {autoState === 1 && (
            <>
              <label htmlFor="multi">Tag: </label>
              <Select id="multi" placeholder="Search Countries..." isMulti onChange={selectedOption => setSelectedOption(selectedOption.value)} options={option} className="multi-input" />
            </>
          )}
          {autoState === 0 && (
            <>
              <label htmlFor="multi">Tag: </label>
              <Select id="multi" placeholder="Search Countries..." onChange={multiOption => setMultiOption(multiOption.value)} options={option} className="multi-input" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Auto;
const option = [
  { label: "United States", value: "USA" },
  { label: "Canada", value: "CAN" },
  { label: "Mexico", value: "MEX" },
  { label: "Brazil", value: "BRA" },
  { label: "United Kingdom", value: "GBR" },
  { label: "France", value: "FRA" },
  { label: "Germany", value: "DEU" },
  { label: "Spain", value: "ESP" },
  { label: "Italy", value: "ITA" },
  { label: "Russia", value: "RUS" },
  { label: "China", value: "CHN" },
  { label: "Japan", value: "JPN" },
  { label: "India", value: "IND" },
  { label: "South Korea", value: "KOR" },
  { label: "Australia", value: "AUS" },
  { label: "New Zealand", value: "NZL" },
  { label: "South Africa", value: "ZAF" },
  { label: "Egypt", value: "EGY" },
  { label: "Nigeria", value: "NGA" },
  { label: "Kenya", value: "KEN" },
  { label: "Saudi Arabia", value: "SAU" },
  { label: "United Arab Emirates", value: "ARE" },
  { label: "Turkey", value: "TUR" },
  { label: "Iran", value: "IRN" },
  { label: "Israel", value: "ISR" },
  { label: "Pakistan", value: "PAK" },
  { label: "Afghanistan", value: "AFG" },
  { label: "Iraq", value: "IRQ" },
  { label: "Syria", value: "SYR" },
  { label: "Greece", value: "GRC" },
  { label: "Sweden", value: "SWE" },
  { label: "Norway", value: "NOR" },
  { label: "Finland", value: "FIN" },
  { label: "Denmark", value: "DNK" },
  { label: "Switzerland", value: "CHE" },
  { label: "Netherlands", value: "NLD" },
  { label: "Belgium", value: "BEL" },
  { label: "Portugal", value: "PRT" },
  { label: "Argentina", value: "ARG" },
  { label: "Chile", value: "CHL" },
  { label: "Colombia", value: "COL" },
  { label: "Peru", value: "PER" },
  { label: "Venezuela", value: "VEN" },
  { label: "Ecuador", value: "ECU" },
  { label: "Malaysia", value: "MYS" },
  { label: "Indonesia", value: "IDN" },
  { label: "Thailand", value: "THA" },
];
