/// <reference types="Cypress" />

import { Then } from "cypress-cucumber-preprocessor/steps";
import MainPage from '../pages/main-page.po'

/**
 * Verify page title
 * @example
 * I see "OOS: Crew applications" in the title
 * @param title
 **/
Then('I see {string} in the title', (title) => {
    cy.title().should('include', title);
  })

/**
 * Verify Header block (logo & app title provided from the text-data.json)
 * @example
 * I verify page header block
**/
  Then('I verify page header block', (title) => {
      MainPage.verifyPageHeader();
  })


/**
 * Count user's items in the particular status coloumn. Compare with expected results.
 * @example
 * Items count in the coloumn with text "Applied" should be "1"
 * @param coloumnText
 * @param count
 **/
  Then('Items count in the coloumn with text {string} should be {string}', (coloumnText, count) => {
    MainPage.countItemsInTheColoumn(coloumnText, count);
})


/**
 * Search by all the INVALID combinations provided in the user-data.json file. (Name and City)
 * Verify that no results displayed
 * Click on clear button before next search
 * @example
 * I veryfy search functionality by INVALID test user Name and City
 **/
Then('I veryfy search functionality by INVALID test user Name and City', () => {
    MainPage.searchForAllInvalidTestUsersByNameAndCity();
    MainPage.verifyUserCardIsNotDisplayed();
    MainPage.clickOnClearButton();
})


/**
 * Verification, that serch results contains specific user card with provided Name, Last Name amd City, 
 * @example
 * I veryfy that search result table contains user with First Name "julia", Last Name "cunningham", City "sheffield1"
 * @param firstName
 * @param lastName
 * @param city
 **/
Then('I veryfy that search result table contains user with First Name {string}, Last Name {string}, City {string}', (firstName, lastName, city) => {
    MainPage.userCardVerification(firstName, lastName, city)
})