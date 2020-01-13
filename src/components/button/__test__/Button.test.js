import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

// snapshot testing
import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="Click Me!"></Button>);
  expect(getByTestId("button")).toHaveTextContent("Click Me!");
});

it("renders save button correctly", () => {
  const { getByTestId } = render(<Button label="save"></Button>);
  expect(getByTestId("button")).toHaveTextContent("save");
});

// Snapshot testing
it("matches snapshot", () => {
  const tree = renderer.create(<Button label="save"></Button>).toJSON(); // convert to virtual DOM object
  expect(tree).toMatchSnapshot();
});
