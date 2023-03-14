import React, {useState} from "react";
import ClosePopup from "./closePopup";


const Card = ({ item }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [popupData,setPopupData] = useState("");
  
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
            
              <div
                className="col-md-4 col-sm-6 col-lg-3 card border-0"
                key={Val.id}
              >
                <ClosePopup
                  trigger={buttonPopup}
                  setTrigger={setButtonPopup}
                  img={popupData.img}
                  name={popupData.name}
                  location={popupData.location}
                  guest={popupData.guest}
                  price={popupData.price}
                  duration={popupData.duration}
                ></ClosePopup>
                
                <div onClick={() =>{ setButtonPopup(true); setPopupData(Val)}}>
                  <div className="text-center">
                    <img src={Val.img} alt={Val.name} className=" w-75 rounded" />
                  </div>
                  <div className="card-body ms-5">
                    <div className="card-title fw-bold">
                      <h3>{Val.name} </h3>
                      <p>{Val.price}$AUD</p>
                    </div>
                    <div className="card-text text-muted">
                      <p className='m-0'>{Val.location}</p>
                      <p className='m-0'>{Val.guest} Guests</p>
                      <p>Duration: {Val.duration}</p>
                    </div>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card;