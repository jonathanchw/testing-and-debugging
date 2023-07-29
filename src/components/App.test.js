import React from "react";
import { ReactTestRenderer } from "react-test-renderer";
import App from "./App";

test("App snapshot test", () => {
  const component = ReactTestRenderer.create(<App />); // Use 'renderer.create' instead of 'Renderer.create'
  const tree = component.toJSON(); // Use 'component.toJSON()' instead of 'component.toJson()'
  expect(tree).toMatchSnapshot();
});
