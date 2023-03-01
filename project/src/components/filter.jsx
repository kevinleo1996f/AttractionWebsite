import Data from "./cardData";
import Card from "./card";
import LocationDd from "./locationDd";
import React, { useState } from "react";
import GuestDd from './guestsDd'

function Filter() {
  const [item, setItem] = useState(Data);

  //Set() is used so the values are not repeated, only unique values will show
  const locationItems = [...new Set(Data.map((Val) => Val.location))];
  const guestsItems = [...new Set(Data.map((Val) => Val.guest))];

  //Filter will receive a value from click and compare with all the category in the database, if it is the same, then it will show the item card.

  const filterLocation = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.location === curcat;
    });
    setItem(newItem);
  };
  const filterGuests = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.guest === curcat;
    });
    setItem(newItem);
  };

  return (
    <div className="container-fluid">
      <div className="row">
      <LocationDd
          filterLocation={filterLocation}
          setItem={setItem}
          locationItems={locationItems}
        />
        
        <Card item={item} />
      </div>
    </div>
  );
}

export default Filter;
