import React from "react";
import waitlistImage from "../ijapa-assets-main/img_017.png";

export default function Waitlist() {
  return (
    <div className="flex justify-center bg-[#FBEFD6]">
      <div className="mt-[80px]">
        <h1 className="text-5xl">Join the waitlist!</h1>
        <p className="w-[461px] text-[20px]">
          Provide your details and be among the first to hear about the product
          release. 
        </p>
        <form>
          <input
            type="text"
            className="block rounded-3xl border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset bg-[#5F7E0C] placeholder:text-white focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 mt-3"
            placeholder="Name"
          />
          <input
            type="email"
            className="block rounded-3xl border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset bg-[#5F7E0C] placeholder:text-white focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 mt-5"
            placeholder="Email Address"
          />
          <button className="cancel  text-[#5F7E0C] mt-2 ml-2 font-bold py-2 px-4 rounded-full">
            Send
          </button>
        </form>
      </div>

      <img src={waitlistImage} className="ml-[58px] w-[645px] h-[665px]" />
    </div>
  );
}
