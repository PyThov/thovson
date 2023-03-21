import React, { useState } from "react";
import { Box } from "@mui/material";
import "./card.css";

interface ICardFlipper {
  front: JSX.Element;
  back: JSX.Element;
}
export default function CardFlipper({ front, back }: ICardFlipper) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <Box
      className={`card ${flipped ? "card--flipped" : ""}`}
      onClick={handleFlip}
    >
      <Box className="card__side">{front}</Box>
      <Box className="card__side card__side--back">{back}</Box>
    </Box>
  );
}
