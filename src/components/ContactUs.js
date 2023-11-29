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
      <div className="h-[629px] modal-body">
        <div className="h-[563px] modal">
          <div className=" flex justify-between">
            <h1 className="policy">Contact Us</h1>
            <img src={cancle} className="icon p-10" onClick={ContactUsModal} />
            <p>Use the form below to send a message to the IjapaFX team.</p>
            <form>
              <input placeholder="Name" />
              <input placeholder="Email Address" />
              <textarea placeholder="Message"> </textarea>
              <input type="submit" value="Cancel" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
