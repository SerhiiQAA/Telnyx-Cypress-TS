# Telnyx Cypress TS

## Summary of Repo
This repository is a training project for automated website testing using [Cypress](https://www.cypress.io/) and TypeScript. The project includes test scenarios, configurations for different environments (desktop, mobile, tablet), and integration with Cypress Cloud for storing and viewing detailed test reports.

## Requirements
Before installing, ensure your system meets the following requirements:
- **Node.js**: Version 14 or higher
- **npm**: Version 6 or higher
- **Git**

## Steps to Install
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository-name.git

1. Navigate into the project directory:
   ```bash
   cd Telnyx-Cypress-TS


1. Install dependencies:
   ```bash
   npm ci


1. Clone the repository:
   ```bash
   git clone https://github.com/your-repository-name.git


## Steps to Launch
## Run Cypress tests:

    Headless mode on desktop:
    ```bash
    npm run test:desktop:headless

    Headless mode on mobile:
    ```bash
    npm run test:mobile:headless


    Headless mode on tablet:
    ```bash
    npm run test:tablet:headless


    Interactive mode on desktop (headed):
    ```bash
    npm run test:desktop:headed

## Steps to Creating the Report
* Test results are automatically uploaded to Cypress Cloud after each test run.
* After running the tests, visit the "View run in Cypress Cloud" link displayed in the GitHub Actions logs to access detailed analytics and test summaries in Cypress Cloud.
* No local report generation is required, as all data is stored and accessible via Cypress Cloud.
