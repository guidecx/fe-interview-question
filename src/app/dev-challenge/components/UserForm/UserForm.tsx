"use client";

import React, { useEffect, useState } from "react";

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

  const [updateUserForm, setUpdateUserForm] = useState({});

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <main className="m-12">
      <p className={"font-mono text-xs text-gray-700"}>
        src/app/dev-challenge/components/UserForm/UserForm.tsx
      </p>
      <div className="mt-1 w-full max-w-5xl rounded bg-gray-100 p-10">
        <div className={styles.Container}>
          <p>User Id: {userId}</p>

          {/** User name goes here */}

          {!loading && !error && <p>{user?.name}</p>}

          {!loading && <p>loading</p>}

          {!error && <p>{error}</p>}

          <br />

          {/** Update user form goes here */}

          <input type="text" />

          <button type="submit" onSubmit={updateUser}>
            Update User
          </button>
        </div>
      </div>
    </main>
  );

  function getUserInfo() {
    setLoading(true);
    setError(null);

    // performRequest()
    //   .then((user) => {
    //     setUser();
    //   })
    //   .catch((error) => {
    //     setError(error);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }

  function updateUser() {
    throw new Error("not implemented!");
  }
}
