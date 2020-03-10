import React, { useEffect, useState } from "react";
import { data } from "./data";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characterArr, setCharacterArr] = useState([]);

  useEffect(() => {
    //axios isn't allowing network requests right now
    setCharacterArr(data.results);
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <App />
    </div>
  );
};

export default App;
