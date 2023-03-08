import React from "react";

//As the name shown, its for the outer layer (Boxes) of the card.
//This will only be calling from App.js
export default function CardBx({ children }) {
  const cardStyle = {
    width: "fixed",
    height: "fixed",
    border: "5px solid ",
    borderRadius: "10px",
    margin: "60px",
    padding: "5px"
  };
  return <div style={cardStyle}>{children}</div>;
}
