"use client";

import React from "react";

const ButtonGradient = ({
  title = "Gradient Button",
  onClick = () => {},
}: {
  title?: string;
  onClick?: () => void;
}) => {
  return (
    <button className="btn btn-gradient animate-shimmer text-white hover:bg-yellow-300 pl-10 pr-10" onClick={onClick}>
      {title}
    </button>
  );
};

export default ButtonGradient;
