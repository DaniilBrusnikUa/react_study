import React, { useState } from "react";

const Film = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseEnter = () => {
    setIsHovered(true);
  };

  const mouseLeave = () => {
    setIsHovered(false);
  };

  const elementClass = isHovered ? "hovered" : "";

  return (
    <div
      className={`film-card ${elementClass}`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {props.children}
    </div>
  );
};

export default Film;
