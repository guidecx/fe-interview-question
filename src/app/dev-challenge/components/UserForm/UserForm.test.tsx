import React from "react";
import UserForm from "./UserForm";
import { render } from "@testing-library/react";

describe("UserForm", () => {
  it("should render successfully", () => {
    expect(() => {
      render(<UserForm />);
    }).not.toThrow();
  });
});
