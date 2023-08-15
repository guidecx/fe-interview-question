import React from "react";
import UserForm from "./UserForm";
import { render } from "@testing-library/react";

describe("UserForm", () => {
  it("should render successfully", () => {
    expect(() => {
      render(<UserForm />);
    }).not.toThrow();
  });

  //Maybe we give the dev test plan and they can run with it?

  it("displays the name of the user", () => {
    throw new Error("not implemented");
  });
  
  //These would be built-in already that validate some behaviors

  it("Makes the proper call to the api to request the initial user data", () => {
    throw new Error("not implemented");
  });

  it("Makes the proper call to the api to update the user data", () => {
    throw new Error("not implemented");
  });
});
