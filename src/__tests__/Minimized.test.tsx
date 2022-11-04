const navigateSpy = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => navigateSpy
}));

import React from "react";
import { render, screen, getAllByAltText } from "@testing-library/react";
import { Minimized } from "../container/minimized";

describe("<Minimized />", () => {
  test("should display image with right alt text", async () => {
    const {rerender} = render(<Minimized />)
    rerender(<Minimized />)
    const img = await screen.getByAltText("Message Connectly");
    expect(img).toBeInTheDocument()
  });
});
