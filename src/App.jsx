import React, { useContext } from "react";
import { ClockContextProvider } from "./context/clock-context";
import Clocks from "./components/Clocks";
import AddClock from "./components/AddClock";
import "./App.css";

export default function App() {
  return (
    <ClockContextProvider>
      <header>
        <h1>World Clocks</h1>
        <section className="add-clock">
          <AddClock />
        </section>
      </header>
      <main>
        <Clocks />
      </main>
    </ClockContextProvider>
  );
}
