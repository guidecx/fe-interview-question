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

const JOHN_DOE = "John Doe";

/**
 * Hints:
 * - `getBy` is synchronous
 * - `findBy` is asynchronous, and returns a promise. use `await` to wait for an element to be found.
 *
 * - use `import userEvent from '@testing-library/user-event';` for interacting with elements
 */

describe("UserForm", () => {
  const query = jest.fn().mockImplementation(mockedQuery);

  beforeAll(() => {
    HttpService.query = query;
  });

  beforeEach(() => {
    resetMockedQuery();
  });

  it("should render successfully and display the userId", () => {
    //TODO: this is pre-populated before the interview starts, gives the user an example of how it the tests are run
    render(<UserForm userId={123} />);
    expect(screen.getByText("User Id: 123")).toBeInTheDocument();
  });

  // todo: these are here, but empty and throwing a Not Implemented error
  it('displays the name of the user, "John Doe", after loading and pre-populates the input with the name', async () => {
    render(<UserForm userId={123} />);

    await screen.findByText(JOHN_DOE);
    const input = screen.getByTestId("user-name-input");
    expect(input).toHaveValue(JOHN_DOE);
  });

  it(`pre-populates the name and input, clears the input, then enters a new name for the user, submits the form to update the user, then displays the new name`, async () => {
    render(<UserForm userId={123} />);

    await screen.findByText(JOHN_DOE);
    const input = screen.getByTestId("user-name-input");
    await userEvent.clear(input);

    await userEvent.type(input, "snake");
    const button = screen.getByTestId("update-user-button");
    await userEvent.click(button);

    await screen.findByText("snake");
  });
});
