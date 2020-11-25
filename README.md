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

Note: In Dockerfile is used cypress/included:4.1.0

- please start the Crew application locally, and execute this command from the root rirectory of the test project
```
docker build -t cypress-crew-tests:3.2.0 .
```