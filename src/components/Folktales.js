import React from "react";
import FolktalesImage from "../ijapa-assets-main/Frame 39763.png";

export default function Folktales() {
  return (
    <div className="folktales-section text-center font-medium bg-gradient h-24 ... text-white ">
      <h1 className="text-5xl">Explore a collection of African folktales!</h1>
      <div className="grid gap-4 grid-cols-3 grid-rows-3 text-white folktale mx-10">
        <ul className="text-white flex flex-col p-20 w-80 text-left">
          <li className="mt-10 text-white">
            <span className="text-center">1</span> To spark a sense of
            engagement and inclusion
          </li>
          <li className="text-white mt-10 ">
            <span className="text-center">3</span> To promote intercultural
            dialogue 
          </li>
        </ul>
        <img src={FolktalesImage} />
        <ul className="mt-10 flex flex-col p-20 w-80 text-left list-right">
          <li className="text-white text-right">
            <span className="text-center">2</span>To preserve and celebrate
            cultural diversity
          </li>
          <li className="text-white mt-10 text-right">
            <span className="text-center text-left">4</span>To enhance social
            cohesion   
          </li>
        </ul>
      </div>
    </div>
  );
}
