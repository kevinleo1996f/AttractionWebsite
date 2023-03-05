import React from "react";
import Data from "./cardData";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

var locationButton = "Anywhere";

const LocationDd = ({ filterLocation, setItem }) => {
  //Set() is used so the values are not repeated, only unique values will show
  const locationItems = [...new Set(Data.map((Val) => Val.location))];
  
  return (
    <>
      <div className="d-flex justify-content-center">
        <DropdownButton as={ButtonGroup} title={locationButton} id="bg-nested-dropdown">

          <Dropdown.Menu>
            {locationItems.map((Val, id) => {
              return (
                <Dropdown.Item
                  onClick={() => {
                    filterLocation(Val);
                    locationButton = Val;
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
                locationButton = "Anywhere";
              }}
            >
              All
            </Dropdown.Item>
          </Dropdown.Menu>
        </DropdownButton>
      </div>
    </>
  );
};

export default LocationDd;
