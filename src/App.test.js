import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders like a boss", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  //ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(instance).parentNode);
});
