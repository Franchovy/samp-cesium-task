import "@testing-library/jest-dom";
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CreateBillboardButton from "./createBillboardButton";

// UI / UX testing

describe("UI functionality check", () => {
  it("Check if prompt appears on click", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <CreateBillboardButton onButtonPressed={onClick} checkNameUnique={(name) => true} />
    );

    window.prompt = jest.fn().mockImplementation(() => true);
    fireEvent.click(getByText(/Create Billboard/i));

    expect(window.prompt).toHaveBeenCalled();
  });

  it("Check return value for correct input", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <CreateBillboardButton onButtonPressed={onClick} checkNameUnique={(name) => true} />
    );

    fireEvent.click(getByText(/Create Billboard/i));
  
    // must fire events for text input as well.

    /*expect(onClick).toHaveReturnedWith({
      uid: "unique name",
      city: "Torino",
      coords: {longitude: 7.686864, latitude: 45.070339},
    });*/
  });
});

