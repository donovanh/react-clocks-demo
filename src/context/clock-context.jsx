import React, { createContext, useState } from "react";

export const ClockContext = createContext();

export const ClockContextProvider = (props) => {
  const timeZones = localStorage.getItem("timezones");
  const initalContext = timeZones ? JSON.parse(timeZones) : [];

  const [clocks, setClocks] = useState(initalContext);

  return (
    <ClockContext.Provider value={[clocks, setClocks]}>
      {props.children}
    </ClockContext.Provider>
  );
};
