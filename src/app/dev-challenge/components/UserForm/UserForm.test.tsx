import React from "react";
import UserForm from "./UserForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import HttpService from "./utility/HttpService";
import {
  mockedQuery,
  resetMockedQuery,
} from "@/app/dev-challenge/components/UserForm/utility/HttpService.test-helper";

jest.mock("./utility/HttpService");

describe("UserForm", () => {
  const query = jest.fn().mockImplementation(mockedQuery);

  beforeAll(() => {
    // Note: The HttpService is already mocked
    HttpService.query = query;
  });

  beforeEach(() => {
    resetMockedQuery();
  });

  it("should render successfully and display the userId", () => {
    render(<UserForm userId={123} />);
    expect(screen.getByText("User Id: 123")).toBeInTheDocument();
  });

  /**
   * Hints:
   * - `getBy` is synchronous
   * - `findBy` is asynchronous, and returns a promise. use `await` to wait for an element to be found.
   *
   * - use `import userEvent from '@testing-library/user-event';` for interacting with elements
   *
   */

  it(`displays the name of the user, "John Doe", after loading`, async () => {
    throw new Error("not implemented");
  });

  it(`displays the name of the user, "John Doe", after loading and pre-populates the input with the name`, async () => {
    throw new Error("not implemented");
  });

  it(`pre-populates the name and input, clears the input, then enters a new name for the user, submits the form to update the user, then displays the new name`, async () => {
    throw new Error("not implemented");
  });
});
