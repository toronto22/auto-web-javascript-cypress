https://www.browserstack.com/guide/run-cypress-tests-in-parallel-without-dashboard

## About project
As an Automation Tester ,I want to use Cypress to test my web application (Bank Project: https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login
). This project is an example about how to set up Cypress project to test a web application. It contains most of the needed thing in a real project.
## How to run the Cypress test

### Run test on local
To run the Cypress test, we can open terminal and execute command:
```shell
## to run cypress in default
npx cypress run
## To run test following command is define `test` in `package.json` file
npx cypress run test
## to run cypress on Chrome browser
npx cypress run e2e:chome

```

### Run test with Dashboard

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

## Setup CICD

### Setup with GitHub Actions
In folders `.github/workflows` we need to add 2 files is `end-to-end-test.yml` and `test-report.yml` (Name of the files can be changes by any name).

The `end-to-end-test.yml` file contains setup run the cypress test and generate results. 
```yaml
##end-to-end-test.yml
name: 'End-to-end tests'
on: push
jobs:
  cypress-run:
    runs-on: ubuntu-22.04
    strategy:
      matrix:
        node-version: [ 16 ]
    steps:
      - name: Checkout
        uses: actions/checkout@v3
      - name: Cypress run
        uses: cypress-io/github-action@v5
        with:
          start: npm run test
          browser: chrome
      - name: Generate report
        uses: actions/upload-artifact@v3  # upload test results
        if: success() || failure()        # run this step even if previous step failed
        with:
          name: test-results
          path: results/*.xml


```
Guide to setup: https://docs.cypress.io/guides/continuous-integration/github-actions

The `test-report.yml` file contain setup to show the report on GitHub Actions system. In the file, we have `path` is the path that the results is generated and `reporter` is the type of the generated results.

```yaml
name: 'Test Report'
on:
  workflow_run:
    workflows: [ 'End-to-end tests' ]                     # runs after 'End-to-end tests' workflow
    types:
      - completed
jobs:
  report:
    permissions: write-all
    runs-on: ubuntu-latest
    steps:
      - uses: dorny/test-reporter@v1
        with:
          artifact: test-results            # artifact name
          name: Tests Result                # Name of the check run which will be created
          path: '*.xml'                     # Path to test results (inside artifact .zip)
          reporter: jest-junit              # Format of test results
```

reference: https://github.com/marketplace/actions/test-reporting

### Setup with Jenkins Pipeline


## Issue

- Language problem when use Firefox, the Firefox browser switch to local user language instead of English.
