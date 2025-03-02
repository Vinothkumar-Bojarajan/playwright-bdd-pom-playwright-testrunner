# Playwright BDD POM Implementation

This repository demonstrates the implementation of the Page Object Model (POM) using Playwright and BDD (Behavior Driven Development) with the Playwright Test Runner.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Writing Tests](#writing-tests)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project showcases how to use the Page Object Model (POM) pattern in conjunction with Playwright for end-to-end testing. The POM pattern helps in creating an abstraction layer over the web UI, making tests more maintainable and readable.

## Installation
To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/Vinothkumar-Bojarajan/playwright-bdd-pom-playwright-testrunner.git
cd playwright-bdd-pom-playwright-testrunner
npm install
```

## Project Structure
The project follows a structured approach to organize test scripts and page objects.

```
playwright-bdd-pom-playwright-testrunner/
├── src/tests/
│   ├── pages/
│   │   └── loginPage.js
│   ├── data/
│   │   ├── login_data.json
│   ├── features/
│   │   ├── login.feature
│   └── steps/
│       ├── loginSteps.js
├── playwright.config.js
├── runTests.js
└── readme.md
```

### Pages
- **loginPage.js**: Contains methods and properties specific to the login page.

### Data
- **login_data.json**: Test data related to the login functionality.

### Features
- **login.feature**: BDD feature file for login scenarios.

### Steps
- **loginSteps.js**: Step definitions for login feature.

## Writing Tests
Tests are written using JavaScript and follow the BDD approach. Each feature file contains scenarios written in Gherkin syntax, and corresponding step definitions are implemented in the steps directory.

Example of a feature file (`login.feature`):
```gherkin
Feature: Login functionality

    Scenario: Successful login
        Given I am on the login page
        When I enter valid credentials
        Then I should be redirected to the home page
```

Example of a step definition (`loginSteps.js`):
```javascript
const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/loginPage');

const loginPage = new LoginPage();

Given('I am on the login page', async () => {
    await loginPage.navigateToLoginPage();
});

When('I enter valid credentials', async () => {
    await loginPage.enterCredentials('username', 'password');
});

Then('I should be redirected to the home page', async () => {
    await loginPage.verifyRedirectionToHomePage();
});
```

## Running Tests
To run the tests, use the following command:

```bash
node .\runTests.js
```

In the "runTests.js" file, below command is responsible for execution. 
playwrightCommand = 'npx bddgen && npx playwright test --workers 1 --headed';

/**
 * This command performs the following steps:
 * 1. Generates test files in the .feature-gen folder using the `npx bddgen` command.
 * 2. Executes the generated test files using the `npx playwright test` command.
 
 * The `npx bddgen` command generates test files based on BDD (Behavior-Driven Development) specifications.
 * These generated test files are stored in the .features-gen folder.
 
 * The `npx playwright test` command then picks up these generated test files for execution.
 * The `--workers 1` option ensures that the tests are run with a single worker, and the `--headed` option runs the tests in a headed browser mode.
 **/

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.