import React from "react";
import UserForm from "./components/UserForm";

export default function DevChallengePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 block w-full max-w-5xl text-sm">
        <div data-testid={"instructions"} className={"font-mono"}>
          <h1 className={"text-xl"}>Welcome!</h1>

          <p className="mb-4">
            Here, we have a form where you can display and update a user's name.
            Please take a look at the files located in this folder to complete
            this challenge:
          </p>

          <ul className={"ml-8 list-disc"}>
            <li>src/app/dev-challenge/components/UserForm/UserForm.tsx</li>
            <li>src/app/dev-challenge/components/UserForm/UserForm.test.tsx</li>
            <li>
              src/app/dev-challenge/components/UserForm/styles.module.scss
            </li>
          </ul>

          <p className={"mt-4"}>
            You can get started by running the tests with the following command:
          </p>

          <p className={"rounded bg-gray-600 p-4 font-mono text-white"}>
            npm run test
          </p>
        </div>

        <UserForm userId={123} />
      </div>
    </main>
  );
}
