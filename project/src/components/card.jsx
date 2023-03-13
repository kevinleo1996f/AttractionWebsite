import React, {useState} from "react";
import ClosePopup from "./closePopup";


const Card = ({ item }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
            
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                key={Val.id}
              >
                <ClosePopup
                  trigger={buttonPopup}
                  setTrigger={setButtonPopup}
                ></ClosePopup>
                
                <div onClick={() => setButtonPopup(true)}>
                  <div className="card-img-top text-center">
                    <img src={Val.img} alt={Val.name} className="photo w-75" width="150px" />
                  </div>
                  <div className="card-body text-center">
                    <div className="card-title fw-bold fs-4">
                      <h1>{Val.name} </h1>
                      <p>{Val.price}$AUD</p>
                    </div>
                    <div className="card-text">
                      <p>{Val.location}</p>
                      <p>{Val.guest} Guests</p>
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