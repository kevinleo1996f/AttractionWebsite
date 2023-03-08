import React from "react";
import Data from "./cardData";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton';

var guestButton = "Add Guest";

const GuestDd = ({ filterGuests, setItem }) => {
  //Set() is used so the values are not repeated, only unique values will show
  const guestsItems = [...new Set(Data.map((Val) => Val.guest))];
  return (
    <>
      <div >
        <DropdownButton id="dropdown-basic-button" title={guestButton}>
            {guestsItems.map((Val, id) => {
              return (
                <Dropdown.Item
                  onClick={() => {
                    filterGuests(Val);
                    guestButton = Val + " Guests";
                  }}
                  key={id}
                >
                  {Val} People
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
        </DropdownButton>
      </div>
    </>
  );
};

export default GuestDd;
