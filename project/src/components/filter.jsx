import Data from "./cardData";
import Card from "./card";
import LocationDd from "./locationDd";
import React, { useState } from "react";
import GuestDd from './guestsDd'
import PriceDd from './PriceDd';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function Filter() {
  const [item, setItem] = useState(Data);
  const [guest, setGuest] = useState(Data);
  const [price, setPrice] = useState(Data);
  
  let filteredItems;

  //Filter will receive a value from click and compare with all the category in the database, if it is the same, then it will show the item card.

  const filterLocation = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.location === curcat;
    });
    setItem(newItem);
    console.log(item)
  };

  const filterGuests = (curcat) => {
    const newItem2 = Data.filter((newVal) => {
      return newVal.guest === curcat;
    });
    setGuest(newItem2);
    console.log(guest)
  };

  const filterPrice = (curcat) => {
    let newItem3;
    if(curcat === "20-50$"){
      newItem3 = Data.filter((newVal) => {
        return (newVal.price >= 20 && newVal.price <= 50);
      })
    } else if (curcat === "50-150$"){
        newItem3 = Data.filter((newVal) => {
          return (newVal.price >= 50 && newVal.price <= 150);
        })
    } else {
      newItem3 = Data.filter((newVal) => {
        return (newVal.price >= 150);
      })
    }
    setPrice(newItem3);
    console.log(price)
  };

  function compareData(item, guest, price){
    return item.filter((value) => guest.includes(value) && price.includes(value))
  }

  function handleOnClick() {
    console.log(1);
  }

  const sameData = compareData(item, guest, price)

  return (
    <div>
      <Stack direction="horizontal" gap={3} className="col-md-5 mx-auto">
        <LocationDd
            filterLocation={filterLocation}
            setItem={setItem}
        />
        <GuestDd 
              filterGuests={filterGuests}
              setItem={setGuest}
        />
        <PriceDd
            filterPrice={filterPrice}
            setItem={setPrice}
        />
        <Button onClick={handleOnClick}><i class="fa fa-search"></i></Button>
        </Stack>
        <Card item={sameData} />
    </div>
  );
}

export default Filter;
