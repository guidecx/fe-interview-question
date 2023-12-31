export default {
  query: _query,
};

/**
 *
 *Implementation Details are intentionally hidden (:
 *
 * Feel free to read up on the types up above though!
 *
 * example usage: 'HttpService.query({method: '', url: ''})'
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

export interface QueryOptions {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  query?: Record<string, string>;
}

export interface QueryResponse {
  status: 200 | 404;
  body: any;
}

async function _query(options: QueryOptions): Promise<QueryResponse> {
  return new Promise(async (resolve, reject) => {
    const isGet = options.method === "GET";
    const isUpdate = options.method === "PUT";

    await setTimeout(() => {
      Promise.resolve();
    }, 500);

    //read from local storage
    if (isGet) {
      if (!options.url.includes("/api/v1/users/")) {
        return resolve({
          status: 404,
          body: null,
        });
      }

      const user = getFromLocalStorage("user");

      return resolve({
        status: 200,
        body: {
          user,
        },
      });
    } else if (isUpdate) {
      if (!options.url.includes("/api/v1/users/")) {
        return resolve({
          status: 404,
          body: null,
        });
      }

      const user = getFromLocalStorage("user");

      saveToLocalStorage("user", {
        ...user,
        ...options.body,
      });

      return resolve({
        status: 200,
        body: null,
      });
    }
  });
}

function getFromLocalStorage(item: string): Record<any, unknown> {
  try {
    return JSON.parse(localStorage.getItem(item)) || defaultUser;
  } catch (error) {
    return defaultUser;
  }
}

function saveToLocalStorage(item: string, value: Record<any, unknown>) {
  localStorage.setItem(item, JSON.stringify(value));
}

const defaultUser = {
  id: 1,
  name: "John Doe",
  email: "jE5hP@example.com",
};
