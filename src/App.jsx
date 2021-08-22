import React, { useContext } from "react";
import { ClockContextProvider } from "./context/clock-context";
import Clocks from "./components/Clocks";
import AddClock from "./components/AddClock";
import "./App.css";

/*
 * Create branches for basic starting app, add in functionality:
 * Local state
 * Passing props
 * Shared state
 * Context API
 * Reducers
 * Redux Toolkit
 * Testing React components using react-testing-library
 * Use context and provider with initial state
 * Dispatch to state from new clock component
 * -- List only the unused clocks in that component
 * Class-based components
 * API call to something like a quote of the day? Current temperature at each clock location?
 */

export default function App() {
  return (
    <ClockContextProvider>
      <header>
        <h1>The Time Zone</h1>
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
