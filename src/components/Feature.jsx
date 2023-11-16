import React from "react";
import featurePost from "../ijapa-assets-main/Frame 39766.png";
import Google from "../ijapa-assets-main/Google Play.png";
import Apple from "../ijapa-assets-main/App Store.png";

export default function Feature() {
  const features = [
    "Children create avatars for themselves.",
    "Children select a story from IjapaFX library.",
    "IjapaFX mobile app immerses the child’s avatar into the digital storytelling experience.",
  ];
  return (
    <div className="feature">
      <div className="flex justify-between">
        <div>
          <img src={featurePost} className="feature-pic" />
        </div>

        <div className="mt-[100px] p-10">
          <h1 className="text-5xl w-[26.9rem]">
            Key features of IjapaFX mobile app
          </h1>
          {features.map((feature) => (
            <li className="list w-[24rem]">{feature}</li>
          ))}
          <div className="flex justify-around ">
            <img src={Google} className="mx-0" />
            <img src={Apple} />
          </div>
        </div>
      </div>
    </div>
  );
}
