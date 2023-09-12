"use client"
import "../app/globals.css";
import React, { useState, useEffect } from "react";

export default function Sidebar() {
    const [isActive, setIsActive] = useState(false);
    const toggleSidebar = () => {
        setIsActive(!isActive);
    };
    return (
        <nav className={`sidebar ${isActive ? "is-hidden" : ""}`}>
            <ul>
                <li>Home</li>
                <li>Notification</li>
                <li>Memo</li>
                <li>Order</li>
                <li>History</li>
            </ul>
        </nav>
    )
}
