import React from "react";
import Data from "./cardData";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';

var priceButton = "Price Range";


const PriceDd = ({ filterPrice, setItem }) => {
    const priceItems = ["20-50$","50-150$","150-...$"];
  return (
    <>
      <div className="d-flex justify-content-center">
        <DropdownButton as={ButtonGroup} title={priceButton} id="bg-nested-dropdown">

          <Dropdown.Menu>
            {priceItems.map((Val, id) => {
              return (
                <Dropdown.Item
                  onClick={() => {
                    filterPrice(Val);
                    priceButton = Val;
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
                priceButton = "Add Guest";
              }}
            >
              All
            </Dropdown.Item>
          </Dropdown.Menu>
        </DropdownButton>
      </div>
    </>
  )
};

export default PriceDd;
