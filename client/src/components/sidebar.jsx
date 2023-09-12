"use client";
import "../app/globals.css";
import React, { useState, useEffect } from "react";

export default function Sidebar({ isActive, isHidden }) {
  return (
    <nav className={`sidebar ${isActive ? isHidden : ""}`}>
      <ul>
        <li>Home</li>
        <li>Notification</li>
        <li>Memo</li>
        <li>Order</li>
        <li>History</li>
      </ul>
    </nav>
  );
}
