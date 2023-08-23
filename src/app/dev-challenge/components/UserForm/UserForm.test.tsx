import React from "react";
import UserForm from "./UserForm";
import { render } from "@testing-library/react";

import HttpService from "./utility/HttpService";

jest.mock("./utility/HttpService");

describe("UserForm", () => {
  const query = jest.fn();

  beforeEach(() => {
    HttpService.query = query;
  });

  it("should render successfully", () => {
    expect(() => {
      render(<UserForm />);
    }).not.toThrow();
  });

  //Maybe we give the dev test plan and they can run with it?

  it("displays the name of the user after loading", () => {
    throw new Error("not implemented");
  });

  it("lets you enter a new name for the user, and updates the user, then displays the new name", () => {
    throw new Error("not implemented");
  });

  //These would be built-in already that validate some behaviors

  it("displays loading text while the user data is being fetched", () => {
    throw new Error("not implemented");
  });

  it("displays a generic error message if the user data could not be fetched", () => {
    throw new Error("not implemented");
  });

  it("Makes the proper call to the api to request the initial user data", () => {
    throw new Error("not implemented");
  });

  it("Makes the proper call to the api to update the user data", () => {
    throw new Error("not implemented");
  });
});
