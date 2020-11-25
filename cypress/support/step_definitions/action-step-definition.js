/// <reference types="Cypress" />

import { Before, Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import MainPage from '../pages/main-page.po'

Given('User navigates to the Main Page', () => {
    cy.visit('/')
})


/**
 * Summit form with provided User Name and User City. Verify, that input fields contains provided data.
 *
 * @example
 * I input Name "julia" and City "sheffield" into the form
 *
 * @param name
 * @param city
 **/
When('I input Name {string} and City {string} into the form', (name, city) => {
    MainPage.submitForm(name, city);
    MainPage.inputFieldsContains(name, city);
})


/**
 * Click on Submit button
 *
 * @example
 * I click on Submit button
 *
 **/
And('I click on Submit button', () => {
    MainPage.clickOnSubmitButton();
})


/**
 * Click on Clear button
 *
 * @example
 * I click on Clear button
 *
 **/
And('I click on Clear button', () => {
    MainPage.clickOnClearButton();
})

/**
 * Search by all the valid combinations provided in the user-data.json file. (Name only)
 * Verify every displayed User's card
 * Click on clear button before next search
 *
 * @example
 * I veryfy search functionality by test user Name
 *
 **/
And('I veryfy search functionality by test user Name', () => {
    MainPage.searchForAllValidTestUsersByName();
})


/**
 * Precondition before the dasboard verification.
 * Clicks up to 3 times on Left Arrow button. No failure if it's not exist.
 *
 * @example
 * I set user status to the Applied state
 *
 **/
When('I set user status to the Applied state', () => {
    MainPage.setUserStatusToApplied()
})

/**
 * Click on right arrow button on the User's card
 *
 * @example
 * I click on the right Arrow button on the user's card
 **/
When('I click on the right Arrow button on the user\'s card', () => {
    MainPage.clickRightArrow()
})