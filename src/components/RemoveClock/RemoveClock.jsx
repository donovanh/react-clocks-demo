import React, { useContext, useState } from "react";
import "./remove-clock.css";

export default function RemoveClock({ clickHandler }) {
  return (
    <button className="remove-clock" onClick={clickHandler}>
      ⓧ
    </button>
  );
}
