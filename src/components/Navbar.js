import React from "react";
import ijapalogo from "../ijapa-assets-main/Layer_1.png";

export default function Navbar() {
  return (
    <nav className="flex">
      <img src={ijapalogo} className="ijapa-logo" alt="ijapa-logo" />
      <ul className="flex">
        <li>Contact us</li>
        <li>Help Center</li>
      </ul>
    </nav>
  );
}
