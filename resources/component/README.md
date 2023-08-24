# Instructions

[FOR INTERNAL USE ONLY]

[These instructions can be found and updated at https://github.com/guidecx/fe-interview-question/edit/master/resources/component/README.md]

## Before the interview

- A computer needs to be set up
  - Computer is unlocked
  - This repository is up and running with `npm run dev`
  - The IDE is open (VSCode with the UserForm.tsx file open)
    - And the folder is showing on the left
  - Terminal is open to the folder
    - accepts `npm run test`, just to make sure we're in the right folder
  - Browser window is opened to `http://localhost:3000/dev-challenge`
    - This is what the user should see

Prompt, to be read to the interviewee:

> We've got form here where we want to display a user's name from the server based on the User ID passed from the parent
> component. We'd also like to be able to update the user's name in the same component, but it's only partially complete
> and little broken.

> Let's open the `UserForm.test.tsx` file and run the tests to see where we're at

[... interviewee opens the file, run test]

## 1. Query And Display User Name

> So, we'll start by having you display the user's name after querying it from the server.
> The api instructions are available in a comment in the UserForm file, labeled `Get User Info`.

Query and Display the User's name

- Set the user state, default to null
- Display the user name in the jsx, conditionally
- On load, in use-effect, request data by querying the endpoint via instructions
- If successful, set the user to the state
- Assert that it works

Notes

- No need to worry about displaying errors or loading states, but it's fine if they want to

## 2. Assert Display of User Name

> Let's write the test to assert that the user's name populates on load

Write a test to assert that behavior

- You need to use an await and findBy because it's populated async
- basic gist
    - render
    - await user name

## 3. Debug CSS

> Then, we have a form that should match the display of the "show user" bit up above it, but somethings wrong with the
> css
> Take a bit of time to debug the css issue and get the form looking nice again.

Fix the Form by debugging the container's class name

## 4. Pre-Populate Update Form Input

> Now that the form is looking good, we can see that we have an input. Let's pre-populate the value with the user's name
> from the initial request.

Pre-populate the input with the queried user's name

- Create a new state, default of ''
- attach the state value to the input element
- Update the query to set the input state

## 5. Assert Pre-Population

> Let's work on the second test to assert the pre-population behavior of the input

Write a test to assert pre-population behavior

- Basic gist
    - render
    - await user name
    - Get input
    - assert input value

## 6. Style a Button

> The submit button remains unstyled, but we'd like to be a nice simple blue. There are some instructions in the styles
> file for how we'd like it to look.

[You could tell the interviewee that tailwind is optional here, but maybe let them look first]

style the button according to the instructions in the styles.modules.scss file

- (Using tailwind is a bonus)

## 7. Update The User

> Now that the form is looking good, perform a request to the api to update the user by passing the new name in the
> body. The instructions are in the same UserForm file along the top labeled `Update User Info`.

Submit the form to update the user and set the updated user to state, displaying the new name

- Create the query to update the user via the url
- If a successful response, re-query the "get user" and the state should update itself

## Validate whole form as an E2E-style test

> Lastly, let's finish up the testing requirements by finishing the final test to validate the form as a whole, asserting
> that our user is being updated successfully when we enter a new name and submit.

Create a test to validate that behavior

- They'll need to clear the input, which may be a bit tricky, but hopefully hints help
- Basic gist:
    - render
    - await user name
    - get the input
    - Clear the input
    - Type new name
    - Click submit button
    - await new user name
