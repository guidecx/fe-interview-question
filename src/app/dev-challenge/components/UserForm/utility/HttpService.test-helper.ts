import { QueryOptions } from "@/app/dev-challenge/components/UserForm/utility/HttpService";

const JOHN_DOE = "John Doe";

let SAVED_USER = JOHN_DOE;

export function mockedQuery(input: QueryOptions) {
  if (!input.url.includes("/api/v1/users/")) {
    return Promise.resolve({
      status: 404,
      body: null,
    });
  }

  const isGet = input.method === "GET";
  const isUpdate = input.method === "PUT";

  if (!isGet && !isUpdate) {
    return Promise.resolve({
      status: 404,
      body: null,
    });
  }

  if (isGet) {
    return Promise.resolve({
      status: 200,
      body: {
        user: {
          id: 123,
          name: SAVED_USER,
        },
      },
    });
  } else {
    setSavedUser(input.body.name);

    return Promise.resolve({
      status: 200,
      body: null,
    });
  }
}

export function resetMockedQuery() {
  setSavedUser(JOHN_DOE);
}

function setSavedUser(name: string) {
  SAVED_USER = null;
  SAVED_USER = name;
}
