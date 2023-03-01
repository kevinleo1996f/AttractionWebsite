import React from "react";
import Data from "./cardData";
import Dropdown from "react-bootstrap/Dropdown";

var guestButton = "Add Guest";

const GuestDd = ({ filterGuests, setItem, guestsItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {guestButton}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {guestsItems.map((Val, id) => {
              return (
                <Dropdown.Item
                  onClick={() => {
                    filterGuests(Val);
                    guestButton = Val;
                  }}
                  key={id}
                >
                  {Val}
                </Dropdown.Item>
              );
            })}
            <Dropdown.Item
              onClick={() => {
                setItem(Data);
                guestButton = "Add Guest";
              }}
            >
              All
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
};

export default GuestDd;
