import React, { useState } from "react";
import layerLogo from "../ijapa-assets-main/Layer_1 (3).png";
import { Icon } from "@fortawesome/fontawesome-svg-core";
import Popup from "./Popup";
import PrivacyPopup from "./PolicyPopup";
import facebooklogo from "../ijapa-assets-main/Facebook.png";
import instsgramlogo from "../ijapa-assets-main/ri_instagram-fill.png";
import twitterlogo from "../ijapa-assets-main/Twitter.png";
import linkednlogo from "../ijapa-assets-main/linkedin.png";

export default function Footer() {
  const [popup, setPopup] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  function handlePopup() {
    setPopup(true);
  }
  function handlePrivacyPopup() {
    setPrivacy(true);
  }

  return (
    <div className=" bg-black h-[535px] ">
      <div className="text-center text-white flex justify-center items-center flex-col">
        <img src={layerLogo} className="mt-10" />

        <div className="leading-[2rem] snap-center w-[956px]">
          <p className="mt-7">
            Verazoom is a creative SME using digital storytelling to transform
            how traditional folklores are told to preserve deep moral and
            cultural values across generations.
          </p>
          <p className="mt-3">
            Traditional folklores are an integral part of the African culture
            which offers a valuable means of collective identity to preserve the
            richness of the cultural heritage. There is a growing concern
            regarding the loss of cultural identity among African communities in
            diaspora, particularly among children. This means that children are
            often disconnected from the cultural richness and moral values
            embedded in traditional storytelling, which can lead to a sense of
            dislocation and alienation.
          </p>
          <p>
            The IjapaFX mobile app offers a unique opportunity to transform
            African traditional folklores into interactive digital storytelling
            that can reconnect children to their cultural heritage in a
            meaningful and creative way. These digital experiences would help to
            preserve and celebrate cultural diversity, promote intercultural
            dialogue, and enhance social cohesion.
          </p>
        </div>
      </div>
      <div className="footer-list">
        <ul className=" flex justify-start items-start ">
          <a href="#">
            <li className="m-5 text-white" onClick={handlePopup}>
              Terms & conditions
            </li>
          </a>
          <a href="#">
            <li className="m-5 text-white" onClick={handlePrivacyPopup}>
              Privacy policy
            </li>
          </a>
          <a href="#">
            <li className="m-5 text-white">Help center</li>
          </a>
        </ul>
        <ul className="flex justify-end mx-10  ">
          <li className="m-5 text-white">
            <img src={facebooklogo} />
          </li>
          <li className="m-5 text-white">
            {" "}
            <img src={instsgramlogo} />
          </li>
          <li className="m-5 text-white">
            <img src={twitterlogo} />
          </li>
          <li className="m-5 text-white">
            <img src={linkednlogo} />
          </li>
        </ul>
      </div>
      <small className="text-[#D4D0C8] p-[3] flex justify-center items-center font-[14px]">
        Copyright 2023, Verazoom Limited. All rights reserved
      </small>

      {popup && <Popup x={popup} y={setPopup} />}
      {privacy && <PrivacyPopup m={privacy} n={setPrivacy} />}
    </div>
  );
}

//  <Popup />
