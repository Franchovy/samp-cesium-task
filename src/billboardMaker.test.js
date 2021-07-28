import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from "react";
import ReactDOM from "react-dom";
import ReactTestUtils, { act } from "react-dom/test-utils";
import { render, fireEvent, screen } from "@testing-library/react";

import BillboardMaker from "./billboardMaker";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render and add billboard", () => {
  // Test render
  act(() => {
    ReactDOM.render(<BillboardMaker />, container);
  });

  // Manually call billboardMaker function "addBillboard"

  const button = container.querySelector("Billboard");
  // Expect billboard count === 1
});

it("fail to add billboard with duplicate name", () => {
  // Test render
  act(() => {
    ReactDOM.render(<BillboardMaker />, container);
  });

  // Manually call billboardMaker function "addBillboard"
  // Manually call billboardMaker function "addBillboard" with identical name

  const billboard = container.querySelector("Billboard");
  // Expect billboard count === 1
});

it("can render and call input prompts", () => {
  // Test render
  act(() => {
    ReactDOM.render(<BillboardMaker />, container);
  });

  const button = container.querySelector("button");
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  // Expect prompt to appear
});
