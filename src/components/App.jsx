import React from "react";
import { useState } from "react";

function App() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  function getCurrentTime() {
    return new Date().toLocaleTimeString();
  }

  function updateTime() {
    setCurrentTime(new Date().toLocaleTimeString());
  }

  setInterval(updateTime, 5000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;

//Challenge:

//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);
