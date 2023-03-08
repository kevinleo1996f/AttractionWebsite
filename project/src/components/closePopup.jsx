import React from "react";
import "./popup.css";
import Card from "./card"
import Data from "./cardData"

//As the name shown, its the (Close) button inside the Popup.
//We use Tenary operator below to create the function (if its trigger,
// it should run the function : or else= "null")

function ClosePopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <Card item = {Data}/>
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </button>
        
      </div>
    </div>
  ) : (
    ""
  );
}

export default ClosePopup;
