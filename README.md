# Cypress Cucumber Docker
---

E2E testing project using Cypress and Cucumber (BDD)

### Install all dependencies

```
npm install
```

### Running the tests locally

- Open cypress dashboard:
```
npm run cy:open
```

- Chrome browser:
```
npm run cy:run:chrome
```

- Firefox browser:
```
npm run cy:run:firefox
```


### Run all tests in Docker

Note: In Dockerfile is used cypress/included:3.2.0

- please start the Crew application locally, and execute this command from the root rirectory of the test project
(before that you have to remove node_modules directory from the root of the project. Running the tests from Docker mostly designed for CI integration.)
```
docker build -t cypress-crew-tests:3.2.0 .
```
