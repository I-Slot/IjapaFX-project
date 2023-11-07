import React from "react";
import heroImage from "../ijapa-assets-main/Isolation_Mode.png";
import heroCarton from "../ijapa-assets-main/Group 100.png";

export default function Hero() {
  return (
    <div>
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
