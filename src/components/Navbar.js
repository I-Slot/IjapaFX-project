import React from "react";
import ijapalogo from "../ijapa-assets-main/Layer_1.png";

export default function Navbar() {
  return (
    <nav className="flex sticky top-0 z-[20] mx-auto w-full items-center justify-between p-8">
      <img src={ijapalogo} className="ijapa-logo mx-10" alt="ijapa-logo" />
      <ul className="flex justify-between mx-8 p-8 text-lg">
        <li className="mx-8">Contact us</li>
        <li>Help Center</li>
      </ul>
    </nav>
  );
}
