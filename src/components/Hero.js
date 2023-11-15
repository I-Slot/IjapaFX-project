import React from "react";
import heroImage from "../ijapa-assets-main/Isolation_Mode.png";
import heroCarton from "../ijapa-assets-main/Group 100.png";
import ijapalogo from "../ijapa-assets-main/Layer_1.png";

export default function Hero() {
  return (
    <div className="App hero bg-[url('../src/ijapa-assets-main/header_bcg.png')] bg-no-repeat bg-cover min-h-full">
      <nav className="flex  mx-auto w-full items-center justify-between p-8">
        <img src={ijapalogo} className="ijapa-logo mx-10" alt="ijapa-logo" />
        <ul className="flex justify-between mx-8 p-8 text-lg">
          <li className="mx-8">Contact us</li>
          <li>Help Center</li>
        </ul>
      </nav>
      <img
        src={heroImage}
        className="hero-image flex items-center justify-center m-auto mt-0"
        alt="hero-image"
        width="450px"
      />
      <p className="text-center text-[2vw] w-100 hero-text text-lime-600">
        We connect children to their cultural <br /> heritage in a creative way 
      </p>
      <img
        src={heroCarton}
        className="hero-image flex items-center justify-center m-auto mt-0 w-[20vw]"
        alt="hero-image"
      />
    </div>
  );
}
