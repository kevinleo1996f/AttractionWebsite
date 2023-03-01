import React from "react";
import Data from "./cardData";
import Dropdown from "react-bootstrap/Dropdown";

var locationButton = "Anywhere";

const LocationDd = ({ filterLocation, setItem, locationItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {locationButton}
          </Dropdown.Toggle>

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
        </Dropdown>
      </div>
    </>
  );
};

export default LocationDd;
