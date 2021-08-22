import React, { useContext, useState, useEffect, useRef } from "react";
import { ClockContext } from "../../../context/clock-context";
import RemoveClock from "../../RemoveClock";
import { Face, Hour, Minute, Second } from "./parts";

import "./clock.css";

function calculateAngles(zone) {
  const localDate = new Date();
  const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let zonedDate = localDate.toLocaleString("en", {
    timeZone: zone,
  });
  const date = new Date(zonedDate);
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const secondsPastHour = minutes * 60 + seconds;

  const minute = ((secondsPastHour * 6) / 60).toFixed(3);
  return {
    second: (seconds * 6).toFixed(3),
    minute,
    hour: (hours * 30 + minute / 12).toFixed(3),
  };
}

export default function Clock({ zone }) {
  /* Handle the clock's display and hand positions */
  const [angles, setAngles] = useState(calculateAngles(zone));
  const requestRef = useRef();

  const setCurrentAngles = () => {
    setAngles(calculateAngles(zone));
    requestRef.current = requestAnimationFrame(setCurrentAngles);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(setCurrentAngles);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  const handStyle = (angle) => ({
    transform: `rotateZ(${angle}deg)`,
  });

  /* Handle removing the clock */
  const clockRef = useRef();
  const [clocks, setClocks] = useContext(ClockContext);

  const removeClockHandler = () => {
    clockRef.current.className = clockRef.current.className + " removing";
    const updatedClocks = clocks.filter((clock) => clock.zone !== zone);
    setTimeout(() => {
      setClocks(updatedClocks);
    }, 300);
  };

  return (
    <section className="clock-wrapper" ref={clockRef}>
      <div className="clock">
        <Face />
        <div className="hand-wrapper" style={handStyle(angles.hour)}>
          <Hour />
        </div>
        <div className="hand-wrapper" style={handStyle(angles.minute)}>
          <Minute />
        </div>
        <div className="hand-wrapper" style={handStyle(angles.second)}>
          <Second />
        </div>
      </div>
      <div className="clock-title">{zone}</div>
      <RemoveClock clickHandler={removeClockHandler} />
    </section>
  );
}
