import Data from "./cardData";
import Card from "./card";
import LocationDd from "./locationDd";
import React, { useState } from "react";
import GuestDd from './guestsDd'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import PriceDd from './PriceDd';
import Button from 'react-bootstrap/Button';

function Filter() {
  const [item, setItem] = useState(Data);
  let filteredItems;

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

  const filterPrice = (curcat) => {
    let newItem;
    if(curcat === "20-50$"){
      newItem = Data.filter((newVal) => {
        return (newVal.price >= 20 && newVal.price <= 50);
      })
    } else if (curcat === "50-150$"){
        newItem = Data.filter((newVal) => {
          return (newVal.price >= 50 && newVal.price <= 150);
        })
    } else {
      newItem = Data.filter((newVal) => {
        return (newVal.price >= 150);
      })
    }
    setItem(newItem);
  };
  function handleOnClick() {
    console.log(1);
  }

  return (
    <div>
      <ButtonGroup>
        <LocationDd
            filterLocation={filterLocation}
            setItem={setItem}
        />
        <GuestDd 
              filterGuests={filterGuests}
              setItem={setItem}
        />
        <PriceDd
            filterPrice={filterPrice}
            setItem={setItem}
        />
        <Button onClick={handleOnClick}><i class="fa fa-search"></i></Button>
      </ButtonGroup>
        <Card item={item} />
    </div>
  );
}

export default Filter;
