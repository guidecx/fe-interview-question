"use client";

import React, { useEffect, useState } from "react";

import HttpService from "./utility/HttpService";

type HttpServiceModule = {
  query: (options: QueryOptions) => Promise<QueryResponse>;
}

interface QueryOptions {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  query?: Record<string, string>;
}

interface QueryResponse {
  status: 200 | 404;
  body: any;
}

import styles from "./styles.module.scss";

type User = {
  id: number;
  name: string;
  type: string;
};

type UserFormProps = {
  userId: number;
};

/**
 * Get User Info
 * Use the HttpService.query above (see HttpServiceModule type definition above for help)
 * - endpoint: '/api/v1/users/{userId}'
 * - method: "GET"
 *
 * successful response
 * - status: 200
 * - body: {user: User}
 */

/**
 * Update User Info
 * Use the same HttpService.query as before (see HttpServiceModule type definition above for help)
 * - endpoint: '/api/v1/users/{userId}'
 * - method: "PUT"
 * - body: {name: string}
 *
 * successful response:
 * - status: 200
 * - body: null (note, no user is returned in the response for a successful update)
 *
 */

export default function UserForm({ userId }: UserFormProps) {
  //todo: all of this state is removed before the final version
  const [user, setUser] = useState<User | null>(null);

  const [newUserName, setNewUserName] = useState("");

  // todo : use effects are removed in the final version
  useEffect(() => {
    void getUserInfo();
  }, []);

  useEffect(() => {
    if (user) {
      setNewUserName(user.name);
    }
  }, [user]);

  return (
    <main className="m-12">
      <p className={"font-mono text-xs text-gray-700"}>
        src/app/dev-challenge/components/UserForm/UserForm.tsx
      </p>
      <div className="mt-1 w-full max-w-5xl rounded border-[1px] border-gray-300 bg-gray-100 p-10">
        <div className={styles.Container}>
          <p data-testid={"user-id"} className={"font-mono"}>
            User Id: {userId}
          </p>

          <div
            className={
              "mb-10 rounded border-[1px] border-gray-300 bg-white p-10"
            }
          >
            <h3 className={"mb-2 text-2xl font-semibold"}>User Info</h3>
            <h4 className={"mb-2 text-lg font-semibold"}>Name</h4>
            {/** User name goes here */}
            {/** todo: user name is removed in the final version */}
            <p>{user?.name}</p>
          </div>

          {/** todo: this className needs to be changed to "styles.Container" in the final version*/}
          <div
            data-testid={"update-user-form"}
            className={styles.FormContainer}
          >
            <h3 className={styles.Header}>Update User Form</h3>

            <div className={styles.InputContainer}>
              <label className={styles.Label} htmlFor={"user-name"}>
                User Name
              </label>

              <input
                data-testid={"user-name-input"}
                id={"user-name"}
                type="text"
                className={styles.Input}
                value={newUserName}
                onChange={(e) => setNewUserName(e.target.value)}
              />
            </div>

            <div className={"flex justify-end"}>
              {/** Todo: this on-click stays, calls the updateUser function */}
              <button
                type="button"
                onClick={updateUser}
                className={styles.Button}
                data-testid={"update-user-button"}
              >
                Update User
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );

  //todo: this is removed from the final version, but the function below gives an example of how it should be done
  async function getUserInfo() {
    try {
      const response = await HttpService.query({
        method: "GET",
        url: "/api/v1/users/" + userId,
      });
      if (response.status === 200) {
        setUser(response.body.user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // todo: this stays empty, and throws an error of Not Implemented
  async function updateUser() {
    try {
      // TODO: remove this query in the final version
      const response = await HttpService.query({
        method: "PUT",
        url: "/api/v1/users/" + userId,
        body: {
          name: newUserName,
        },
      });

      if (response.status === 200) {
        void getUserInfo();
      }
    } catch (error) {
      console.log(error);
    }
  }
}
