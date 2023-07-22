Base URL: https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login

https://www.browserstack.com/guide/run-cypress-tests-in-parallel-without-dashboard

## How to run the Cypress test
To run the Cypress test, we can open terminal and execute command:
```shell
## To run test following command is define `test` in `package.json` file
npx cypress run test
## to run cypress in default
npx cypress run
## to run cypress on Chrome browser
npx cypress run e2e:chome
## to run cypress on record mode
npx cypress run e2e:record

```

## CI with Dashboard

Create cypress project on Dashboard:

- Access https://cloud.cypress.io/ and login
- Open `Projects` navigation
- Create new project with a valid project name

When we created project successfully, we would get `projectID` and `key` (Example: `vbf851`
and `3db77b18-0357-418f-b1d8-4b89b23fca3d`).
We have to add projectId into `cypress.config.js` file

```js
module.exports = {
    projectId: "{your-cypress-project-id}",
    // ...rest of the Cypress project config
}
```
To run the project with cypress dashboard, we need run the following command with our `key`:
```shell
npx cypress run --record --key {your-key}
```

## Issue

- Language problem when use Firefox, the Firefox browser switch to local user language instead of English.

## reference:
https://github.com/marketplace/actions/test-reporting

## TODO
- write README.md