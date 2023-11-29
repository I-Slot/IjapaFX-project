import React, { useState } from "react";
import cancle from "../ijapa-assets-main/close_button.png";

export default function PolicyPopup({ m, n }) {
  function handleClosePopup() {
    // x: true;
    // y: true;
    n(false);
  }
  return (
    <div>
      <div className="h-[629px] modal-body">
        <div className="h-[563px] modal">
          <div className=" flex justify-between">
            <h1 className="policy">Privacy Policy</h1>
            <img
              src={cancle}
              className="icon p-10"
              onClick={handleClosePopup}
            />
          </div>
          <p className=" w-[1236px] flex-paragraph">
            Lorem ipsum dolor sit amet consectetur. Nunc egestas accumsan morbi
            interdum pellentesque mus porta pellentesque et. Scelerisque ac urna
            leo egestas mattis penatibus interdum leo fusce. Phasellus
            adipiscing suspendisse sed ultrices. Tempus fermentum massa ut felis
            netus vitae. Magna magna vehicula integer nibh magna. Nulla sed
            dignissim massa id et. Ultricies netus tempus sed fringilla orci
            aenean feugiat enim. Mi et dictumst a nisl fames mi morbi eget.
            Aliquet diam nam cursus at euismod viverra. In arcu feugiat risus
            feugiat fringilla. Tempor sit placerat vel mauris magna orci
            egestas. Habitasse et ullamcorper auctor quam ultricies eget nulla.
            Tempor a turpis nibh diam quis nunc varius urna mi. Eget pulvinar
            pretium ullamcorper cras varius. Purus tincidunt risus arcu nunc.
            Elit in maecenas mauris vulputate pretium tortor etiam tristique.
            Nunc tellus nulla est volutpat lorem ac condimentum eu. Vel id est
            commodo vitae in purus tincidunt habitant amet. Porta etiam aenean
            molestie dui in fringilla sed odio. Tortor consequat velit eu amet
            in suscipit lectus posuere. Purus sed pharetra urna id ultricies
            nibh. Luctus aliquam phasellus amet nibh nunc pulvinar. In hac nisi
            pellentesque pellentesque. Sociis mauris integer non dictumst
            consequat tempus potenti tristique. Aenean senectus amet lobortis
            ullamcorper ultrices. Fames turpis vel tincidunt id sit lectus
            venenatis fringilla convallis. Tellus in cursus pretium turpis vitae
            etiam. Risus lectus ultricies magna senectus. Quisque elementum
            viverra ornare rhoncus varius. Amet adipiscing et volutpat varius
            dis nisi nisl turpis arcu. Sit in tristique tristique scelerisque.
            Feugiat donec non purus ac dignissim gravida mi ultrices. Orci dis
            sagittis cursus in etiam nisi urna tincidunt. Ut diam vestibulum
            etiam urna dictum vel arcu nulla. Eget lobortis ipsum odio platea
            porttitor nibh egestas. Ac non lacus eleifend mattis lectus neque
            nisi lectus neque. Eu velit scelerisque donec viverra duis
          </p>
        </div>
      </div>
    </div>
  );
}
