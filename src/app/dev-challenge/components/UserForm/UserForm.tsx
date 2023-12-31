"use client";

import React, { useEffect, useState } from "react";

import HttpService from "./utility/HttpService";

type HttpServiceModule = {
  query: (options: QueryOptions) => Promise<QueryResponse>;
};

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
 * Note the User type
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

            {/* todo: User name goes here  */}
          </div>

          <div data-testid={"update-user-form"} className={styles.Container}>
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
              />
            </div>

            <div className={"flex justify-end"}>
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

  async function updateUser() {
    try {
      // Use HttpService.query to perform the request
      throw new Error("update user query not implemented");
    } catch (error) {
      console.log(error);
    }
  }
}
