import React, { useState } from "react";
import ButtonInside from "./ButtonBox";
import CardBx from "./cardBox";
import ClosePopup from "./closePopup";

export default function CardPopUp() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <CardBx>
        <ButtonInside>
          <ClosePopup
            trigger={buttonPopup}
            setTrigger={setButtonPopup}
          ></ClosePopup>
          <div>
            <img
              onClick={() => setButtonPopup(true)}
              src="https://brookfarm.com/wp-content/uploads/2018/03/BerkshiresHotAirBalloonRide.jpg"
              alt="imgButton"
              height="200px"
              width="relative"
            />
          </div>
        </ButtonInside>
      </CardBx>
    </div>
  );
}