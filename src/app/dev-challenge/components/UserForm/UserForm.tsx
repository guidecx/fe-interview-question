"use client";

import React, { useEffect, useState } from "react";
import HttpService from "./utility/HttpService";

import styles from "./styles.module.scss";

type User = {
  id: number;
  name: string;
  type: string;
};

type UserFormProps = {
  userId: number;
};

export default function UserForm({ userId }: UserFormProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [newUserName, setNewUserName] = useState("");

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
      <div className="mt-1 w-full max-w-5xl rounded bg-gray-100 p-10">
        <div className={styles.Container}>
          <p data-testid={"user-id"}>User Id: {userId}</p>

          {/** User name goes here */}

          {!loading && !error && <p data-testid={"user-name"}>{user?.name}</p>}

          {loading && <p data-testid={"loading"}>loading</p>}

          {!error && <p data-testid={"error"}>{error}</p>}

          <br />

          {/** Update user form goes here */}

          <form data-testid={"update-user-form"} onSubmit={updateUser}>
            <input
              data-testid={"user-name-input"}
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />

            <button type="submit" data-testid={"update-user-button"}>
              Update User
            </button>
          </form>
        </div>
      </div>
    </main>
  );

  async function getUserInfo() {
    setLoading(true);
    setError(null);

    try {
      const response = await HttpService.query({
        method: "GET",
        url: "/api/v1/users/" + userId,
      });
      if (response.status === 200) {
        setUser(response.body.user);
      } else {
        setError(new Error("An unknown error occurred"));
      }
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  }

  function updateUser(event) {
    event.preventDefault();
    console.log("updateUser");
    setLoading(true);

    HttpService.query({
      method: "PUT",
      url: "/api/v1/users/" + userId,
      body: {
        name: newUserName,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          getUserInfo();
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
}
