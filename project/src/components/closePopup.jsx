import React from "react";
import "./popup.css";

//As the name shown, its the (Close) button inside the Popup.
//We use Tenary operator below to create the function (if its trigger,
// it should run the function : or else= "null")

function ClosePopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="text-center">
          <img src={props.img} alt={props.name} className=" w-75 rounded" />
        </div>
        <div className="card-body ms-5">
          <div className="card-title fw-bold">
            <h3>{props.name} </h3>
            <p>{props.price}$AUD</p>
          </div>
          <div className="card-text text-muted">
            <p className="m-0">{props.location}</p>
            <p className="m-0">{props.guest} Guests</p>
            <p>Duration: {props.duration}</p>
          </div>
        </div>
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
