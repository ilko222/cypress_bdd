
FROM cypress/included:3.2.0
RUN mkdir /cypres-bdd-docker
WORKDIR /cypres-bdd-docker
COPY . /cypres-bdd-docker/
RUN npm install
RUN ls
RUN $(npm bin)/cypress verify
RUN $(npm bin)/cypress run
RUN mkdir -p ./report/ && touch ./report/cucumber_report.html.json && node cypress/support/cucumber-html-reporter.js
COPY ./cucumber-html-reporter /cypres-bdd/reports/html_simple/cucumber_report.html