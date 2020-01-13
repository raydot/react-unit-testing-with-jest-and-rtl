import React from "react";
import "./App.css";
import Button from "./components/button/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button label="Click Me!" className="button-style"></Button>
      </header>
    </div>
  );
}

export default App;
