import React from "react";
import cancle from "../ijapa-assets-main/close_button.png";

export default function ContactUs({ cancel, send }) {
  function ContactUsModal() {
    // alert("clicked");
    send(false);
  }

  function closeContact() {}
  return (
    <div>
      <div className="h-[400px] w-[400px] modal-body">
        <div className="h-[450px] w-[400px] modal">
          <div className=" ">
            <div className="">
              <h1>Contact Us</h1>
              <img
                src={cancle}
                className="inline-block ml-[850px]"
                onClick={ContactUsModal}
                width="20px"
              />
            </div>

            <p className="flex justify-center">
              Use the form below to send a message to the IjapaFX team.
            </p>
            <form>
              <div className="flex justify-center p-5">
                <input
                  className="block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="Name"
                />
                <input
                  className=" block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="Email Address"
                />
              </div>
              <div>
                <textarea
                  className="textarea ml-40 block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="Message"
                >
                  {" "}
                </textarea>
              </div>

              <div className="p-10 ">
                <button
                  onClick={ContactUsModal}
                  className="text-[#006325] cancel font-bold py-2 px-4 rounded-full"
                >
                  Cancel
                </button>
                <button className="bg-[#006325] ml-1 text-white font-bold py-2 px-4 rounded-full">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
