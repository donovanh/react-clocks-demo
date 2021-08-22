import React, { useContext, useState } from "react";
import { ClockContext } from "../../context/clock-context";
import "./add-clock.css";

export default function AddClock() {
  const [clocks, setClocks] = useContext(ClockContext);
  const [zone, setZone] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const selectZone = ({ target }) => {
    if (target.value.length) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
    setZone(target.value);
  };

  const addNewClock = () => {
    if (!zone) {
      return;
    }
    // Set the updated clocks
    const updatedClocks = [...clocks, { zone }];
    localStorage.setItem("timezones", JSON.stringify(updatedClocks));
    setClocks(updatedClocks);
    // Reset the form
    setZone("");
    setButtonDisabled(true);
  };

  // A hand-picked selection for this demo
  const timeZoneOptions = [
    "America/Los_Angeles",
    "America/Jamaica",
    "America/New_York",
    "Antarctica/Casey",
    "Pacific/Auckland",
    "Asia/Bangkok",
    "Asia/Baghdad",
    "Asia/Dubai",
    "Asia/Hong_Kong",
    "Asia/Kathmandu",
    "Asia/Seoul",
    "Asia/Tokyo",
    "Australia/Sydney",
    "Europe/Dublin",
    "Europe/Amsterdam",
    "Europe/London",
    "Europe/Madrid",
    "Europe/Paris",
    "Europe/Stockholm",
    "Pacific/Fiji",
  ];

  // Filter out any clocks already selected
  const filteredOptions = timeZoneOptions.filter((option) => {
    return !clocks.find((clock) => clock.zone === option);
  });

  return (
    <div className="add-clock">
      <select name="zone" value={zone} onChange={selectZone}>
        <option value="">Select a time zone</option>
        {filteredOptions.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        disabled={buttonDisabled}
        type="button"
        onClick={addNewClock}
        value="Add clock"
      />
    </div>
  );
}
