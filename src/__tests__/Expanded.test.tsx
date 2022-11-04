const navigateSpy = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => navigateSpy
}));

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Expanded } from "../container/expanded";

describe("<Expanded />", () => {
  test("should show text", async () => {
    render(<Expanded />)
    const span = await screen.getByText("Message us");
    expect(span).toBeInTheDocument()
  });

  test("should show 3 icons", async () => {
    const {container} = render(<Expanded />)

    const images = container.querySelectorAll("img")
    expect(images.length).toBe(3);
  });

  test("should navigate to menu view", async () => {
    render(<Expanded />)
    fireEvent.click(await screen.findByText("Message us"));
    await new Promise(r => setTimeout(r, 1000));
    expect(navigateSpy).toHaveBeenCalledWith("/menu")
  });
});
