import React, { useState } from "react";
import "./Menu.css";
import { IoIosSpeedometer } from "react-icons/io";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menuState, setMenuState] = useState(1);
  const [singlemenu, setSinglemenu] = useState(0);
  const [submenu, setSubmenu] = useState(0)

  return (
    <div className="menu">
      <div style={{ display: "flex" }}>
        <h3 style={{ flex: 1, fontWeight: "500" }}>Menu</h3>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <IoIosSpeedometer />
          <p style={{ fontWeight: "300", fontSize: ".8rem" }}>
            <Link to="/">Home</Link> &gt; Employee &gt; Menu
          </p>
        </div>
      </div>
      <div className="menu-div">
        <div className="menu-head">
          <li className={menuState === 1 ? "tab-active" : "tab-li"} onClick={() => setMenuState(1)}>
            Single Menus
          </li>
          <li className={menuState === 2 ? "tab-active" : "tab-li"} onClick={() => setMenuState(2)}>
            Sub Menu
          </li>
        </div>
        <div className="menu-content">
          {menuState === 1 && (
            <div style={{ display: "flex" }}>
              <ul>
                <li onClick={() => setSinglemenu(1)}>Testing</li>
                <li onClick={() => setSinglemenu(2)}>Java</li>
                <li onClick={() => setSinglemenu(3)}>.Net</li>
                <li onClick={() => setSinglemenu(4)}>Database</li>
              </ul>
              <p>
                {singlemenu === 1 && "You Have Selected Testing Menu Option."}
                {singlemenu === 2 && "You Have Selected Java Menu Option."}
                {singlemenu === 3 && "You Have Selected >net Menu Option."}
                {singlemenu === 4 && "You Have Selected Database Menu Option."}
              </p>
            </div>
          )}
          {menuState === 2 && (
            <div style={{ display: "flex" }}>
              <ul>
                <li onClick={() => setSinglemenu(1)} className="testing">
                  Testing
                  <ul className="test-li">
                    <li onClick={() => setSubmenu(1)}>Selenium</li>
                    <li onClick={() => setSubmenu(2)}>Manual Testing</li>
                    <li onClick={() => setSubmenu(3)}>DB Testing</li>
                    <li onClick={() => setSubmenu(4)}>Unit Testing</li>
                  </ul>
                </li>
                <li onClick={() => setSinglemenu(2)} className="java">
                  Java
                  <ul className="java-li">
                    <li onClick={() => setSubmenu(5)}>Adv Java</li>
                    <li onClick={() => setSubmenu(6)}>Core Java</li>
                    <li onClick={() => setSubmenu(7)}>Spring</li>
                    <li onClick={() => setSubmenu(8)}>Hibernate</li>
                  </ul>
                </li>
                <li onClick={() => setSinglemenu(3)} className="net">
                  .Net
                  <ul className="net-li">
                    <li onClick={() => setSubmenu(9)}>C#</li>
                    <li onClick={() => setSubmenu(10)}>ASP.NET</li>
                    <li onClick={() => setSubmenu(11)}>ADO.NET</li>
                    <li onClick={() => setSubmenu(12)}>MVC</li>
                  </ul>
                </li>
                <li onClick={() => setSinglemenu(4)} className="database">
                  Database
                  <ul className="database-li">
                    <li onClick={() => setSubmenu(13)}>SQL</li>
                    <li onClick={() => setSubmenu(14)}>My Sql</li>
                    <li onClick={() => setSubmenu(15)}>Oracle</li>
                    <li onClick={() => setSubmenu(16)}>H2</li>
                  </ul>
                </li>
              </ul>
              <p>
                {submenu === 1 && "You Have Selected SELENIUM Menu Option."}
                {submenu === 2 && "You Have Selected MANUAL TESTING Menu Option."}
                {submenu === 3 && "You Have Selected DB TESTING Menu Option."}
                {submenu === 4 && "You Have Selected UNIT TESTING Menu Option."}
                {submenu === 5 && "You Have Selected ADV JAVA Menu Option."}
                {submenu === 6 && "You Have Selected CORE JAVA Menu Option."}
                {submenu === 7 && "You Have Selected SPRING Menu Option."}
                {submenu === 8 && "You Have Selected HIBERNATE Menu Option."}
                {submenu === 9 && "You Have Selected C# Menu Option."}
                {submenu === 10 && "You Have Selected ASP.NET Menu Option."}
                {submenu === 11 && "You Have Selected ADO.NET Menu Option."}
                {submenu === 12 && "You Have Selected MVC Menu Option."}
                {submenu === 13 && "You Have Selected SQL Menu Option."}
                {submenu === 14 && "You Have Selected MYSQL Menu Option."}
                {submenu === 15 && "You Have Selected ORACLE Menu Option."}
                {submenu === 16 && "You Have Selected H2 Menu Option."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
