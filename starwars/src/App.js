import React, { useEffect, useState } from "react";
import axios from "node_modules/axios";
import "./App.css";
import CharacterComponent from "./components/CharacterComponent";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characterObject, setCharacterObject] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.co/")
      .then(response => {
        console.log(response.data);
        setCharacterObject(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CharacterComponent character={characterObject} />
    </div>
  );
};

export default App;
