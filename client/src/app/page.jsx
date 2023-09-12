"use client";
import "./globals.css";
import React, { useState, useEffect } from "react";
export default function Admin() {
  const [isActive, setIsActive] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  const toggleSidebar = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="container">
      <nav className={`sidebar ${isActive ? "is-hidden" : ""}`}>
        <ul>
          <li>Home</li>
          <li>Notification</li>
          <li>Urgent</li>
          <li>Setting</li>
        </ul>
      </nav>
      <div className="contentContainer">
        <div className="button-float">
          <img
            src="https://cdn.icon-icons.com/icons2/2761/PNG/512/menu_hamburger_burger_icon_176431.png"
            alt=""
            style={{ width: "35px", height: "35px" }}
            onClick={toggleSidebar}
          />
        </div>
        <div className="date-container">
          <p className="date-text user-login">User 1</p>
          <p className="date-text">{currentDate.toLocaleString()}</p>
        </div>
        <div className="titleContainer">
          <h1>Dashboard Admin</h1>
        </div>
        <div className="tableContainer">
          <table className="table">
            <tr>
              <th>No</th>
              <th>Produk</th>
              <th>Nama Pemborong</th>
              <th>Nama Vendor</th>
              <th>dummy</th>
              <th>test</th>
              <th>Nama</th>
              <th>Nama</th>
            </tr>
            <tr>
              <td>1</td>
              <td>ANTO</td>
              <td>ANTO</td>
              <td>ANTO</td>
              <td>ANTO</td>
              <td>ANTO</td>
              <td>ANTO</td>
              <td>ANTO</td>
            </tr>
            <tr>
              <td>2</td>
              <td>ANTO</td>
              <td>ANTO</td>
              <td>ANTO</td>
              <td>ANTO</td>
              <td>ANTO</td>
              <td>ANTO</td>
              <td>ANTO</td>
            </tr>
            <tr>
              <td>3</td>
              <td>ANTO</td>
              <td>ANTO</td>
              <td>ANTO</td>
              <td>ANTO</td>
              <td>ANTO</td>
              <td>ANTO</td>
              <td>ANTO</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}
