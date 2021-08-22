import React, { useContext } from "react";
import { ClockContext } from "../../context/clock-context";
import Clock from "./Clock";

import "./clocks.css";

export default function Clocks() {
  const [clocksToShow] = useContext(ClockContext);

  return (
    <section className="clocks">
      {clocksToShow.map((clock) => (
        <Clock {...clock} key={clock.zone} />
      ))}
      {!clocksToShow.length && <h3>Select a time zone and add a clock</h3>}
    </section>
  );
}
