"use client";
import "./globals.css";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
export default function Admin() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  const serverRenderedDate = currentDate.toLocaleString("en-US", {
    hour12: true, // Use 12-hour format with AM/PM
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <div className="container">
      <Sidebar isActive={isActive} isHidden={"is-hidden"} />
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
            <thead>
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
            </thead>
            <tbody>
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
