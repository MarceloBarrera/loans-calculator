# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## My Notes

Run unit tests: `npm test`
Run cypress e2e tests: `npm start & npx cypress run` (headless) or `npm start & npx cypress open` (to open cypress UI)

I choose React because is a very well known framework, I choose CRA to deal with all boiler plate (web pack, babel, typescript, lint, etc, under the hood)
I would probably add custom hooks.
I choose date-fns to quickly deal with format dates and adding months, I prefer this over moment.js
I would add a formatter for the currency symbol.
UX discussion: Maybe show all errors and not 1 at the time. Maybe add button to show validation error
I would add pre-processor SAAS, post-processor and husky

Probably make it better looking, logging support to track potential issues in production, dockerization, automation for checking security issues of npm packages, report test coverage, CI and CD, etc.

The cypress e2e tests should use a mock data api, at the moment is not ideal to query the real API!.

Probably add/create a "loading" component to signify that an async call is going on for the user.

More Unit testing to achieve 100% test coverage

Performance:
I would use a tool like https://gtmetrix.com/ or google one: https://developers.google.com/speed/pagespeed/insights/
-lang support maybe
-cypress automation via Gitlab for example

```
{
    "name": "Marcelo Barrera",
    "email": "marcelodarmis@gmail.com",
    "bio": "Seasoned, passionate and open-minded software developer with many years of commercial experience implementing full stack application systems.",
    "hobbies": [ "Cycling", "Football", "Reading"],
    "interests": [ "Clean code", "Scalability", "Reusability", "Testability", "Always learning new things"],
    "humble": true,
    "curious": true,
    "easygoing": true,
    "foosball_champion": true,
    "adaptable": true,
    "team_player": true,
    "github_url": "https://github.com/MarceloBarrera",
    "stack_overflow_url": "https://stackoverflow.com/users/2789024/darmis",
    "linkedin_url": "https://www.linkedin.com/in/marcelobarrera/",
    "hireable": null
}
```
